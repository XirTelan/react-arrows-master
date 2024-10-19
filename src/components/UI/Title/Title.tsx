import styles from "./Title.module.css";
const Title = ({ text }: { text: string }) => {
  return (
    <div className={styles.title}>
      <p>{text}</p>
    </div>
  );
};

export default Title;
