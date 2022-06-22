import ChatRoom from "../component/waitingroom/ChatRoom";
import RoomList from "../component/waitingroom/RoomList";
import UserList from "../component/waitingroom/UserList";
import UserUtil from "../component/waitingroom/UserUtil";

const WaitingRoom = (props) => {
  const { setTap } = props;
  return (
    <div>
      <RoomList setTap={setTap} />
      <UserList />
      <ChatRoom />
      <UserUtil setTap={setTap} />
    </div>
  );
};

export default WaitingRoom;
