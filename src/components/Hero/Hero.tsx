import { useRef } from "react";
import styles from "./Hero.module.css";
import HeroImg from "./Hero.module.css";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.position}
      style={{
        display: "flex",
      }}
    >
      <div
        ref={ref}
        className={styles.image}
        style={{
          background: `url(${HeroImg}) 0 0 no-repeat`,
        }}
      />
    </div>
  );
};

export default Hero;
