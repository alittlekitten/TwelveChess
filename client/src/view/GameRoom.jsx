import { useEffect } from "react";
import BackBtn from "../component/gameroom/BackBtn";
import GameBoard from "../component/gameroom/GameBoard";
import GameChatRoom from "../component/gameroom/GameChatRoom";
import InformationBoard from "../component/gameroom/InformationBoard";
import User1Info from "../component/gameroom/User1Info";
import User2Info from "../component/gameroom/User2Info";
import Socket from "../socket/socket";

const GameRoom = () => {
  useEffect(() => {
    Socket.connect();
    return () => {
      Socket.disconnect();
    };
  }, []);
  return (
    <div>
      <BackBtn />
      <GameBoard />
      <GameChatRoom />
      <InformationBoard />
      <User1Info />
      <User2Info />
    </div>
  );
};

export default GameRoom;
