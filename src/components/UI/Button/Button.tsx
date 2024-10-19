import styles from "./Button.module.css";
import bg from "../../../assets/GUI.png";

const Button = ({ text, action }: { text: string; action: () => void }) => {
  return (
    <button
      onClick={action}
      className={styles.btn}
      style={{
        background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
