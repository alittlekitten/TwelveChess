import React, { useEffect, useState, useMemo } from 'react';
import ChatRoom from '@components/waitingroom/ChatRoom';
import CreateRoomModal from '@components/waitingroom/CreateRoomModal';
import RoomList from '@components/waitingroom/RoomList';
import RoomUtil from '@components/waitingroom/RoomUtil';
import UserList from '@components/waitingroom/UserList';
import UserUtil from '@components/waitingroom/UserUtil';
import Socket from '@socket/socket';
import { useAppSelector } from '@store/hooks';

interface IUserData {
  nickname: String;
}

const WaitingRoom = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [accessor, setAccessor] = useState<Object[]>([]);
  const [sid, setSid] = useState("");
  const nickname = useAppSelector((state) => state.user.nickname);

  const setUsers = (data: any) => {
    if (data) {
      console.log(data);
      const userList: String[] = [];
      const userData = Object.values(data) as IUserData[];
      userData.forEach(elem => {
        userList.push(elem.nickname);
      })
      setAccessor(userList);
    }
  }
  
  const setRoom = () => {

  }
  
  const back = () => {
    console.log("뒤로가기");
  }

  const Enter = useMemo(() => Socket.enter({setUsers, setRoom, back}), []);

  useEffect(()=>{
    Socket.connect();
    Socket.access(nickname);
    Enter.joinRoom({chatRoomCode: "123", user: {nickname}});
    // Socket.getData(setUsers);
    Socket.random();
    return () => {
      Socket.disconnect();
      console.log("유저목록에서 삭제하는걸 구현");
      
    };
  },[])

  return (
    <div>
      <RoomList />
      <RoomUtil setIsModalOn={setIsModalOn} />
      <UserList accessor={accessor} />
      <ChatRoom />
      <UserUtil />
      {isModalOn && <CreateRoomModal setIsModalOn={setIsModalOn} />}
    </div>
  );
};

export default WaitingRoom;
