import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import Wrapper from "../UI/Wrapper/Wrapper";
import styles from "./GameOver.module.css";

const GameOver = ({ score, reset }: { score: number; reset: () => void }) => {
  return (
    <Wrapper>
      <div></div>
      <Title text={`SCORE: ${score}`} />
      <div className={styles.actions}>
        <Button text={"Restart"} action={reset} />
      </div>
    </Wrapper>
  );
};

export default GameOver;
