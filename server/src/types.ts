import type { Socket, Server } from 'socket.io';

export type RoomType = {
  [code: string]: {
    roomName: string;
    hostSID: string;
    users: {
      [sid: string]: {
        nickname: string;
      };
    };
    isStarted: boolean;
  };
};

export type EnterPropType = {
  io: Server;
  socket: Socket;
  rooms: RoomType;
  waitingRoom: RoomType;
};

export type TargetInfoType = {
  code: string;
};

export type SocketPropType = {
  io: Server;
  socket: Socket;
  rooms: RoomType;
  waitingRoom: RoomType;
  targetInfo: TargetInfoType;
};
