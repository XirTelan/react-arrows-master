import Title from "../UI/Title/Title";
import styles from "./Docs.module.css";

const Docs = () => {
  return (
    <div className={styles.container}>
      <Title text={"How to play"} />

      <p>
        Not responsive.Not intended for mobile devices The game window requires
        a screen width of 1024px{" "}
      </p>
      <p>
        Enemies move in 3 lines. Enter the specified sequence of arrows to kill
        the enemy in the same line as you. You have 5 seconds to enter the
        information. After that, the sequence will change.
      </p>
      <p>
        Gradually the number of keys will increase, and the time for enemies to
        appear will speed up.
      </p>
      <p>You have 4 lives. For each enemy that reaches you, you lose 1</p>
      <Title text={"Controls"} />
      <p>z ,x ,c - change line</p>
      <p>&larr; &uarr; &rarr; &darr; (alternative NumPad 4 8 6 5 ) </p>

      <Title text={"Assets Credits"} />
      <p>"Retro Inventory", ElvGames https://twitter.com/ElvGames</p>
      <p>
        Tiny RPG - Dragon Regalia GUI by Gabriel 'tiopalada' Lima is marked with
        CC0 1.0
      </p>
      <p>Background https://craftpix.net/file-licenses/</p>

      <p>Font - Arcade Classic Regular (Jakob Fischer)</p>
    </div>
  );
};

export default Docs;
