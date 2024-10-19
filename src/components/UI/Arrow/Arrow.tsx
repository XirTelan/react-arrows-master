import ArrowImg from "../../../assets/Arrow.png";

const imgs = {
  1: `rotate(180deg)`,
  2: `rotate(0)`,
  3: `rotate(-90deg)`,
  4: `rotate(90deg)`,
};

const Arrow = ({ dir }: { dir: number }) => {
  return (
    <div
      style={{
        background: `url(${ArrowImg}) 0 0 no-repeat `,
        backgroundSize: "contain",
        width: "60px",
        height: "60px",
        transform: imgs[dir as keyof typeof imgs],
      }}
    ></div>
  );
};

export default Arrow;
