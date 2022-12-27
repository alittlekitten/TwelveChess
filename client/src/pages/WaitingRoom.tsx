import React, { useState } from 'react';
import ChatRoom from '@components/waitingroom/ChatRoom';
import CreateRoomModal from '@components/waitingroom/CreateRoomModal';
import RoomList from '@components/waitingroom/RoomList';
import RoomUtil from '@components/waitingroom/RoomUtil';
import UserList from '@components/waitingroom/UserList';
import UserUtil from '@components/waitingroom/UserUtil';

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
