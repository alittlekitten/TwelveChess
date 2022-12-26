import { ERROR } from "@src/constant";
import type { EnterPropType, SocketPropType } from "@src/types";

// enter: 방 접속 socket 함수
const enter = ({ io, socket, rooms }: EnterPropType): SocketPropType => {
  const targetInfo = { code: "" };

  socket.on("ENTER_ROOM", ({ chatRoomCode: code, user }) => {
    // 존재하지 않는 방이라면 에러 전송
    if (!(code in rooms))
      return socket.emit("ENTER_ROOM_ERROR", ERROR.NOT_EXIST_ROOM);

    // 방 접속자수가 2명 이상이면 에러 전송
    if (Object.keys(rooms[code].users).length === 2)
      return socket.emit("FULL_ROOM_ERROR", ERROR.FULL_ROOM_ERROR);
    targetInfo.code = code;

    const sid = socket.id;
    rooms[code].users[sid] = user;

    socket.join(code);
    socket.emit("ENTER_EXIST_ROOM", rooms[code].users); // 방에 들어가면 현재 방에 있는 유저 정보 전송
    io.to(code).emit("ENTER_OTHER_USER", user); // 이미 접속해있는 사람들에게 새로 들어간 사람의 정보 전송
  });

  // 연결 종료
  socket.on("disconnect", () => {
    const code = targetInfo.code;
    if (!rooms[code]) return;

    socket.leave(code);

    const sid = socket.id;
    delete rooms[code].users[sid];
    // 혼자 있을 때 그 사람이 나갔다면 방 없앰
    if (!Object.keys(rooms[code].users).length) delete rooms[code];
    else {
      socket.broadcast.emit("DISCONNECT_USER", sid);
      // 나간사람이 방장이었다면 남아있는 사람이 새로운 방장이 되었다고 알림보냄
      if (rooms[code].hostSID === sid) {
        const newHostSID = Object.keys(rooms[code].users)[0];
        rooms[code].hostSID = newHostSID;
        io.to(newHostSID).emit(
          "ENTER_CHANGE_HOST",
          rooms[code].users[newHostSID],
        );
      }
    }
  });

  return { io, socket, rooms, targetInfo };
};

export default enter;
