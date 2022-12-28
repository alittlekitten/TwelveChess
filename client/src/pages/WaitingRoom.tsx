import React, { useState, useEffect } from 'react';
import ChatRoom from '@components/waitingroom/ChatRoom';
import CreateRoomModal from '@components/waitingroom/CreateRoomModal';
import RoomList from '@components/waitingroom/RoomList';
import RoomUtil from '@components/waitingroom/RoomUtil';
import UserList from '@components/waitingroom/UserList';
import UserUtil from '@components/waitingroom/UserUtil';
import useEnterWaitingRoomSocket from '@hooks/useEnterWaitingRoomSocket';

const WaitingRoom = () => {
  const [isModalOn, setIsModalOn] = useState<Boolean>(false);
  // 임시로 방 정보, 채팅내용을 any로 처리
  const [roomData, setRoomData] = useState<any>([]);
  const [chatData, setChatData] = useState<any>([]);
  const [users, setUsers] = useState<String[]>([]);
  useEnterWaitingRoomSocket(setRoomData, setChatData, setUsers);

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
