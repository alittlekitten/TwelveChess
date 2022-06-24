import { Socket, Server } from "socket.io";
import { FRONT_BASE_URL } from "@src/constant";
import type { RoomType } from "@src/types";
import pipe from "@src/utils/pipe";
import create from "@controller/socket/create";
import enter from "@controller/socket/enter";
import chat from "@controller/socket/chat";

const socketLoader = (server: any): void => {
  const io = new Server(server, {
    cors: {
      origin: FRONT_BASE_URL,
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

  const rooms: RoomType = {}; // 방이 저장되는 공간

  io.on("connection", (socket: Socket): void => {
    console.log("socket connection!!", socket.id);

    pipe(create, enter, chat)({ io, socket, rooms });

    socket.on("disconnect", () => {
      console.log("disconnect socket!!" + socket.id);
    });
  });
};

export default socketLoader;
