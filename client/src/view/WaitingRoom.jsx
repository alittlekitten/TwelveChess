import { useState } from "react";
import ChatRoom from "../component/waitingroom/ChatRoom";
import CreateRoomModal from "../component/waitingroom/CreateRoomModal";
import RoomList from "../component/waitingroom/RoomList";
import RoomUtil from "../component/waitingroom/RoomUtil";
import UserList from "../component/waitingroom/UserList";
import UserUtil from "../component/waitingroom/UserUtil";

const WaitingRoom = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <div>
      <RoomList />
      <RoomUtil setIsModalOn={setIsModalOn} />
      <UserList />
      <ChatRoom />
      <UserUtil />
      {isModalOn && <CreateRoomModal setIsModalOn={setIsModalOn} />}
    </div>
  );
};

export default WaitingRoom;
