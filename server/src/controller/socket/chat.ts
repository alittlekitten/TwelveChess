import type { SocketPropType } from '@src/types';

const chat = ({
  io,
  socket,
  rooms,
  waitingRoom,
  targetInfo,
}: SocketPropType): SocketPropType => {
  socket.on('CHAT_SENDING', ({ msg }) => {
    const { code } = targetInfo;

    const messageData = {
      msg,
      sid: socket.id,
    };
    io.to(code).emit('CHAT_RECEIVE', messageData);
  });
  return { io, socket, rooms, waitingRoom, targetInfo };
};

export default chat;
