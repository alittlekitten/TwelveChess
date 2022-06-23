import BackBtn from "../component/gameroom/BackBtn";
import GameBoard from "../component/gameroom/GameBoard";
import GameChatRoom from "../component/gameroom/GameChatRoom";
import InformationBoard from "../component/gameroom/InformationBoard";
import User1Info from "../component/gameroom/User1Info";
import User2Info from "../component/gameroom/User2Info";

const GameRoom = (props) => {
  const { setTap } = props;
  return (
    <div>
      <p>게임방에 오신 것을 환영합니다.</p>
      <BackBtn setTap={setTap} />
      <GameBoard />
      <GameChatRoom />
      <InformationBoard />
      <User1Info />
      <User2Info/>
    </div>
  );
};

export default GameRoom;
