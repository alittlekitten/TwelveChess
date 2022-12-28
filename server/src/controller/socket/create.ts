import type { RoomType, SocketPropType } from '@src/types';

const createRoomCode = (rooms: RoomType) => {
  while (true) {
    const code = Math.random().toString(16).substr(2, 5);
    if (!(code in rooms)) return code;
  }
};

// create: 방 생성 socket 함수
const create = ({
  io,
  socket,
  rooms,
  waitingRoom,
  targetInfo,
}: SocketPropType): SocketPropType => {
  socket.on('CREATE_REQUEST', (roomSetting) => {
    console.log('요청받음');
    const { roomName } = roomSetting;
    const roomCode = createRoomCode(rooms);
    const sid = socket.id;
    rooms[roomCode] = {
      roomName,
      hostSID: '',
      users: {},
      isStarted: false,
    };
    socket.emit('CREATE_SUCCESS', roomCode);
  });

  return { io, socket, rooms, waitingRoom, targetInfo };
};

export default create;
