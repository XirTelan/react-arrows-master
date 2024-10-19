import "./App.css";
import Docs from "./components/Docs/Docs";
import GameMain from "./components/GameMain/GameMain";
import Title from "./components/UI/Title/Title";

function App() {
  return (
    <>
      <Title text={"Arrows master"} />
      <GameMain />
      <Docs />
    </>
  );
}

export default App;
