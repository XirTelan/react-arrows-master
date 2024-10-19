import styles from "./ActionsBlock.module.css";
import Arrow from "../UI/Arrow/Arrow";
import actionsBg from "../../assets/actionsBg.png";
import frame from "../../assets/frame.png";

const ActionsBlock = ({
  timer,
  actionsOrder,
  currentPos,
}: {
  timer: number;
  actionsOrder: number[];
  currentPos: number[];
}) => {
  return (
    <div
      className={styles.actionSeq}
      style={{
        background: `url(${actionsBg})  no-repeat `,
        backgroundSize: "cover",
      }}
    >
      <div
        className={styles.timer}
        style={{
          background: `url(${frame})  no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles["timer-text"]}>{(timer / 1000).toFixed(1)}</div>
      </div>
      {actionsOrder.map((val, indx) => (
        <div className={styles.arrow} key={indx}>
          {currentPos[0] > indx ? (
            <div className={styles["success-mark"]}>
              <img
                src="./src/assets/accept_icon.png"
                height={40}
                width={40}
                alt=""
              />
            </div>
          ) : currentPos[1] === 0 ? (
            <Arrow dir={val} />
          ) : (
            "fail"
          )}
        </div>
      ))}
    </div>
  );
};

export default ActionsBlock;
