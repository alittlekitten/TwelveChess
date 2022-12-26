import { useEffect } from "react";
import BackBtn from "../component/gameroom/BackBtn";
import GameBoard from "../component/gameroom/GameBoard";
import GameChatRoom from "../component/gameroom/GameChatRoom";
import InformationBoard from "../component/gameroom/InformationBoard";
import User1Info from "../component/gameroom/User1Info";
import User2Info from "../component/gameroom/User2Info";
import Socket from "../socket/socket";
import { roomsAPI } from "../api/room";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const GameRoom = () => {
  const roomCode = useSelector((state) => state.user.roomCode);
  console.log("룸코드", roomCode);
  const roomData = useQuery("roomData", () => roomsAPI(roomCode));
  console.log("데이터1", roomData);

  useEffect(() => {
    Socket.connect();
    return;
  }, []);

  if (roomData.isLoading)
    return (
      <>
        <p>loading...</p>
      </>
    );

  return (
    <div>
      <BackBtn />
      <GameBoard />
      <GameChatRoom />
      <InformationBoard info={roomData.data.data} />
      <User1Info />
      <User2Info />
    </div>
  );
};

export default GameRoom;
