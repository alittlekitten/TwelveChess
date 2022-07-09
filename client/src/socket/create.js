const create = (socket) => (closure) => {
  const { joining } = closure;

  socket.on("CREATE_SUCCESS", (roomCode) => {
    console.log("잘받음");
    console.log(roomCode);
    joining(roomCode);
  });

  const createRoom = (roomSetting) => {
    console.log(roomSetting);
    socket.emit("CREATE_REQUEST", roomSetting);
  };

  const disconnecting = () => {
    socket.off("CREATE_SUCCESS");
  };

  return { createRoom, disconnecting };
};

export default create;
