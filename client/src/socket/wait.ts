const wait = (socket) => (closure) => {
  const { setUsers, setRoom, back } = closure;

  socket.on('ENTER_OTHER_USER', (user) => {
    setUsers((prev) => [...prev, user]);
  });

  socket.on('CHANGE_ROOM_ACTION', (exitId) => {
    setUsers((prev) => prev.filter(({ socketId }) => socketId !== exitId));
  });

  const joinRoom = (data) => socket.emit('JOIN_WAITING_ROOM', data);

  const disconnecting = () => {
    socket.off('NOT_EXIST_ROOM_ERROR');
    socket.off('FULL_ROOM_ERROR');
    socket.off('OTHER_USER_LIST');
    socket.off('ENTER_OTHER_USER');
    socket.off('EXIT_USER');
    socket.off('TOGGLE_READY');
    socket.off('READY_ERROR');
  };

  return { joinRoom, ready, disconnecting };
};

export default wait;
