import type { Socket, Server } from "socket.io";

export type RoomType = {
  [code: string]: {
    hostSID: string;
    users: {
      [sid: string]: {
        nickname: string;
      };
    };
  };
};

export type EnterPropType = {
  io: Server;
  socket: Socket;
  rooms: RoomType;
};

export type TargetInfoType = {
  code: string;
};

export type SocketPropType = {
  io: Server;
  socket: Socket;
  rooms: RoomType;
  targetInfo: TargetInfoType;
};
