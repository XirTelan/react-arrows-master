import ui1 from "../../assets/Health_04_Heart_Red.png";
import styles from "./HpBar.module.css";

const imgPos = {
  0: "-192px",
  1: "-144px",
  2: "-96px",
  3: "-48px",
  4: "0",
};

const HpBar = ({ value }: { value: number }) => {
  return (
    <div className={styles["player"]}>
      <div
        className={styles["player-bar"]}
        style={{
          background: `url(${ui1}) ${
            imgPos[value as keyof typeof imgPos]
          } 0 no-repeat`,
        }}

        // style={{
        //   background: `url(${ui1}) 0 0 no-repeat`,
        // }}
      ></div>
    </div>
  );
};

export default HpBar;
