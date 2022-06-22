import BackBtn from "../component/gameroom/BackBtn";

const GameRoom = (props) => {
  const { setTap } = props;
  return (
    <div>
      <BackBtn setTap={setTap} />
    </div>
  );
};

export default GameRoom;
