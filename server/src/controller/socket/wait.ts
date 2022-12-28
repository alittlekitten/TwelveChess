import type { EnterPropType, SocketPropType } from '@src/types';

// enter: 방 접속 socket 함수
const enter = ({
  io,
  socket,
  rooms,
  waitingRoom,
}: EnterPropType): SocketPropType => {
  const targetInfo = { code: '' };

  socket.on('ENTER_WAITING_ROOM', ({ chatRoomCode: code, user }) => {
    targetInfo.code = code;

    const sid = socket.id;
    waitingRoom[code].users[sid] = user;

    socket.join(code);
    socket.emit('ENTER_WAITING_ROOM', waitingRoom[code].users); // 대기실에 들어가면 대기실에 있는 유저 정보 전송
    io.to(code).emit('ENTER_WAITING_ROOM_OTHER_USER', user); // 이미 대기실에 접속해있는 사람들에게 새로 들어간 사람의 정보 전송
  });

  // 연결 종료
  socket.on('disconnect', () => {
    const code = targetInfo.code;
    if (!waitingRoom[code]) return;

    socket.leave(code);

    // 대기실에서 나간 유저 정보 삭제
    const sid = socket.id;
    delete waitingRoom[code].users[sid];
  });

  return { io, socket, rooms, waitingRoom, targetInfo };
};

export default enter;
