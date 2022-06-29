import { useState } from "react";
import ChatRoom from "../component/waitingroom/ChatRoom";
import CreateRoomModal from "../component/waitingroom/CreateRoomModal";
import RoomList from "../component/waitingroom/RoomList";
import RoomUtil from "../component/waitingroom/RoomUtil";
import UserList from "../component/waitingroom/UserList";
import UserUtil from "../component/waitingroom/UserUtil";

const WaitingRoom = (props) => {
  const { setTap } = props;
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <div>
      <RoomList setTap={setTap} />
      <RoomUtil setIsModalOn={setIsModalOn} />
      <UserList />
      <ChatRoom />
      <UserUtil setTap={setTap} />
      {isModalOn && (
        <CreateRoomModal setTap={setTap} setIsModalOn={setIsModalOn} />
      )}
    </div>
  );
};

export default WaitingRoom;
