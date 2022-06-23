import BackBtn from "../component/gameroom/BackBtn";

const GameRoom = (props) => {
  const { setTap } = props;
  return (
    <div>
      <p>게임방에 오신 것을 환영합니다.</p>
      <BackBtn setTap={setTap} />
    </div>
  );
};

export default GameRoom;
