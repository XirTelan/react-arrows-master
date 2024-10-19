import { useEffect, useState } from "react";
import styles from "./Enemy.module.css";
import Orc from "../../assets/Orc.png";
const Enemy = ({ val }: { val: number }) => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => (prev += 100) % 800);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.enemy}
      style={{
        transform: `translate(-${val * 40}px , 0px)`,
      }}
    >
      <div
        className={styles.image}
        style={{
          background: `url(${Orc}) 0 0 no-repeat`,
          backgroundPosition: `-${pos}px -100px `,
        }}
      ></div>
    </div>
  );
};

export default Enemy;
