import type { RoomType, SocketPropType } from "@src/types";

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
  targetInfo,
}: SocketPropType): SocketPropType => {
  socket.on("CREATE_REQUEST", (user, roomName) => {
    const roomCode = createRoomCode(rooms);
    const sid = socket.id;
    rooms[roomCode] = {
      roomName,
      hostSID: sid,
      users: {},
    };
    socket.emit("CREATE_SUCCESS", { roomCode });
  });

  return { io, socket, rooms, targetInfo };
};

export default create;
