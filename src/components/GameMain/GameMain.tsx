import { useCallback, useEffect, useState } from "react";
import styles from "./GameMain.module.css";

import Line from "../Line/Line";
import { getRndInteger, getUid } from "../../utils";
import { EnemyProp } from "../../types";
import HpBar from "../HpBar/HpBar";
import Title from "../UI/Title/Title";
import GameOver from "../GameOver/GameOver";
import Menu from "../Menu/Menu";
import ActionsBlock from "../ActionsBlock/ActionsBlock";

import backgroundImg from "../../assets/battlegrounds/Battleground1.png";
import scoreBgImg from "../../assets/Bg.png";

const BASE_L = 3;
const SPANW_RATE_DECREMENT = 50;
const ACTION_MAX_COUNT = 6;
const ENEMY_THRESOLD = 30;
const POINTS_PER_ENEMY = 50;

enum States {
  Pause,
  Active,
  GameOver,
}
const PLAYER_DEFAULT = {
  hp: 4,
  activeLine: 2,
  timer: 5000,
  points: 0,
};

const GameMain = () => {
  const [player, setPlayer] = useState(PLAYER_DEFAULT);

  const [enemies, setEnemies] = useState<{
    1: EnemyProp[];
    2: EnemyProp[];
    3: EnemyProp[];
  }>({
    1: [{ id: getUid(), value: 1 }],
    2: [{ id: getUid(), value: 1 }],
    3: [{ id: getUid(), value: 1 }],
  });

  const [spawnRate, setSpawnRate] = useState(3000);
  const [timer, setTimer] = useState(player.timer);

  const [actionsOrder, setActionsOrder] = useState<number[]>([]);
  const [currentPos, setCurrentPos] = useState([0, 0]);

  const [state, setState] = useState<States>(States.Pause);

  const generateSeq = useCallback(() => {
    const count = Math.min(
      ACTION_MAX_COUNT,
      BASE_L + Math.floor(player.points / 1000)
    );
    const newSeq = [];
    for (let i = 0; i < count; i++) {
      newSeq.push(getRndInteger(1, 4));
    }
    setActionsOrder(newSeq);
  }, [player.points]);

  function updateValues(arr: EnemyProp[]) {
    let count = 0;
    const newArr: EnemyProp[] = [];
    arr.forEach((enemy) => {
      if (enemy.value < ENEMY_THRESOLD)
        newArr.push({ ...enemy, value: ++enemy.value });
      else count++;
    });
    setPlayer((prev) => ({ ...prev, hp: prev.hp - count }));
    return newArr;
  }

  const spawnEmemy = () => {
    setEnemies((prev) => {
      const line = getRndInteger(1, 3) as keyof typeof prev;
      const currentLine = [...prev[line]];
      currentLine.push({
        id: getUid(),
        value: Math.min(0, currentLine.at(-1)?.value ?? 0) - 1,
      });
      const newEnemies = {
        ...prev,
        [line]: currentLine,
      };
      return newEnemies;
    });
  };

  const moveForward = useCallback(() => {
    setEnemies((prev) => {
      return {
        1: updateValues(prev[1]),
        2: updateValues(prev[2]),
        3: updateValues(prev[3]),
      };
    });
  }, []);

  const changeLine = useCallback((indx: number) => {
    setPlayer((prev) => ({ ...prev, activeLine: indx }));
  }, []);

  const performAttack = useCallback(() => {
    let count = 0;
    setEnemies((prev) => {
      const newArr = { ...prev };
      const currentRow = newArr[player.activeLine as 1 | 2 | 3];
      if (newArr[player.activeLine as 1 | 2 | 3].length > 0) {
        currentRow.shift();
        currentRow.push({
          id: getUid(),
          value: Math.min(0, currentRow.at(-1)?.value ?? 0) - 1,
        });
        count++;
      }
      return newArr;
    });
    const newPoints = player.points + POINTS_PER_ENEMY;
    console.log(newPoints, POINTS_PER_ENEMY, count);
    setPlayer((prev) => ({
      ...prev,
      points: newPoints,
    }));
    setSpawnRate((prev) => Math.max(1000, prev - SPANW_RATE_DECREMENT * count));
  }, [player.activeLine, player.points]);

  useEffect(() => {
    if (state !== States.Active) return;

    if (timer > 0) return;
    moveForward();
    setCurrentPos([0, 0]);
    generateSeq();

    setTimer(player.timer);
  }, [generateSeq, moveForward, player.timer, state, timer]);

  useEffect(() => {
    if (player.hp === 0) setState(States.GameOver);
  }, [player.hp]);

  useEffect(() => {
    if (state !== States.Active) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev -= 100));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [state]);

  useEffect(() => {
    if (state !== States.Active) return;

    const spawnEnemy = setInterval(() => {
      spawnEmemy();
      moveForward();
    }, spawnRate);

    return () => clearInterval(spawnEnemy);
  }, [moveForward, spawnRate, state]);

  useEffect(() => {
    function handleClick(this: HTMLElement, e: KeyboardEvent) {
      if (state !== States.Active) return;

      const callback = {
        ArrowLeft: 1,
        ArrowRight: 2,
        ArrowUp: 3,
        ArrowDown: 4,
        4: 1,
        6: 2,
        8: 3,
        2: 4,
        5: 4,
      }[e.key];
      if (!callback) return;

      const currentAction = actionsOrder[currentPos[0]];
      if (currentAction === callback) {
        if (currentPos[0] + 1 === actionsOrder.length) {
          generateSeq();
          setCurrentPos([0, 0]);
          setTimer(player.timer);
          moveForward();
          performAttack();
        } else {
          setCurrentPos((prev) => [prev[0] + 1, 0]);
        }
      } else {
        generateSeq();
        setCurrentPos([0, 0]);
        spawnEmemy();
        setTimer(player.timer);
        moveForward();
      }
    }
    document.body.addEventListener("keydown", handleClick);
    return () => document.body.removeEventListener("keydown", handleClick);
  }, [
    actionsOrder,
    currentPos,
    generateSeq,
    moveForward,
    performAttack,
    player.timer,
    state,
  ]);

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      const value = {
        z: 1,
        x: 2,
        c: 3,
      }[ev.key];
      if (!value) return;
      if (player.activeLine == value) return;

      changeLine(value);
    };
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  }, [changeLine, player.activeLine]);

  const startGame = () => {
    setState(States.Active);
    moveForward();
  };

  useEffect(() => {
    if (state === States.Active) {
      generateSeq();
    }
  }, [generateSeq, state]);

  const resetAll = () => {
    setTimer(5000);
    setPlayer(PLAYER_DEFAULT);
    setEnemies({
      1: [{ id: getUid(), value: 0 }],
      2: [{ id: getUid(), value: 0 }],
      3: [{ id: getUid(), value: 0 }],
    });
    setState(States.Active);
  };

  return (
    <div
      className={styles.container}
      style={{
        background: `url(${backgroundImg}) `,
        backgroundSize: "contain",
      }}
    >
      {state === States.GameOver && (
        <GameOver score={player.points} reset={resetAll} />
      )}
      {state === States.Pause && <Menu start={startGame} />}

      <HpBar value={player.hp} />
      <div
        className={styles.score}
        style={{
          background: `url(${scoreBgImg}) 0 0 no-repeat;`,
          backgroundSize: "cover",
        }}
      >
        <Title text={`SCORE: ${player.points}`} />
      </div>

      {state === States.Active && (
        <ActionsBlock
          timer={timer}
          actionsOrder={actionsOrder}
          currentPos={currentPos}
        />
      )}
      <div className={styles.lines}>
        <Line indx={1} activeLine={player.activeLine} enemies={enemies[1]} />
        <Line indx={2} activeLine={player.activeLine} enemies={enemies[2]} />
        <Line indx={3} activeLine={player.activeLine} enemies={enemies[3]} />
      </div>
    </div>
  );
};

export default GameMain;
