import { useRef } from "react";
import styles from "./Line.module.css";
import Hero from "../Hero/Hero";
import Enemy from "../Enemy/Enemy";
import { EnemyProp } from "../../types";
import LineButton from "../UI/LineButton/LineButton";

const positions = {
  1: `Z`,
  2: `X`,
  3: `C`,
};

const Line = ({
  indx,
  enemies,
  activeLine,
}: {
  indx: 1 | 2 | 3;
  enemies: EnemyProp[];
  activeLine: number;
}) => {
  const spawnPoint = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     spawnPoint.current?.appendChild(Enemy);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={styles.line}>
      <div
        ref={spawnPoint}
        id="spawn"
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          gap: "1rem",
          right: "-115%",
        }}
      >
        {enemies.map((type) => {
          if (type.value === -1) return;
          return <Enemy val={type.value} key={type.id} />;
        })}
      </div>
      <div className={styles.spot}>
        {indx === activeLine ? (
          <div
            style={{
              width: "100px",
              transform: `translate( -30px, -55px)`,
            }}
          >
            <Hero />
          </div>
        ) : (
          <LineButton
            text={positions[indx]}
            action={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Line;
