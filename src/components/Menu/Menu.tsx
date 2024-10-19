import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";

const Menu = ({ start }: { start: () => void }) => {
  return (
    <Wrapper>
      <Button text={"Start"} action={start} />
    </Wrapper>
  );
};

export default Menu;
