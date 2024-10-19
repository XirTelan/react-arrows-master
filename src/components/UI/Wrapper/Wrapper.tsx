import styles from "./Wrapper.module.css";
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
