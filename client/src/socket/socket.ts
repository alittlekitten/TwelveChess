import Nickname from '@src/components/setnickname/Nickname';
import io from 'socket.io-client';
import { BACK_BASE_URL } from '../constant';
import create from './create';
import enter from './enter';

const Socket = () => {
  const socket = io(BACK_BASE_URL, {
    transports: ['websocket'],
    upgrade: false,
    forceNew: true,
  });
  let accessors: object;
  socket.disconnect();

  return {
    getSID: () => socket.id,
    connect: () => socket.connect(),
    disconnect: () => socket.disconnect(),
    create: create(socket),
    enter: enter(socket),
    access: (nickname:string) => {
      socket.emit("access", nickname);
    },
    random: () => {
      socket.emit("random");
    },
    getData: (setAccessor) => {
      socket.on("getWaitingRoomsInfo",(data) => {setAccessor(data);

      },);
      
    }
  };
};

// 함수 호출문을 export해야 사용하는 곳에서 import를 한 다음에 .형태로 메서드를 사용할 수 있다.
export default Socket();
