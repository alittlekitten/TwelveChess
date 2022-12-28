import { useMemo, useEffect } from 'react';
import Socket from '@socket/socket';

const useEnterWaitingRoomSocket = (
  setRoomData: Function,
  setChatData: Function,
  setUsers: Function,
) => {
  const changeRoomData = (newState: any) => {
    setRoomData(newState);
  };

  const addChat = (newChat: any) => {
    setChatData((prev) => [...prev, newChat]);
  };

  const changeUsers = (newState: any) => {
    setUsers(newState);
  };

  const socket = useMemo(
    () =>
      Socket.wait({
        changeRoomData,
        addChat,
        changeUsers,
      }),
    [],
  );

  useEffect(() => {
    socket.joinRoom({
      chatRoomCode: 'waitingRoom',
      nickname,
    });
    return socket.disconnecting();
  }, []);
};

export default useEnterWaitingRoomSocket;
