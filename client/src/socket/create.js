const create = (socket) => () => {
  socket.emit("CREATE_REQUEST");
};

export default create;
