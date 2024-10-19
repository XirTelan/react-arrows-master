import styles from "./LineButton.module.css";

const LineButton = ({ text, action }: { text: string; action: () => void }) => {
  return (
    <button onClick={action} className={styles["linebtn"]}>
      <img
        className={styles["linebtn-img"]}
        src="./src/assets/Btn.png"
        width={45}
        height={45}
        alt=""
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          fontSize: "24px",
          color: `rgb(247, 168, 0)`,
        }}
      >
        <label>{text}</label>
      </div>
    </button>
  );
};

export default LineButton;
