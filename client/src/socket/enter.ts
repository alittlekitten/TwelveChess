const enter = (socket) => (closure) => {
  const { setUsers, setRoom, back } = closure;

  socket.on('NOT_EXIST_ROOM_ERROR', () => {
    back();
    alert('NOT_EXIST_ROOM_ERROR');
  });

  socket.on('FULL_ROOM_ERROR', () => {
    back();
    alert('FULL_ROOM_ERROR');
  });

  socket.on('ENTER_OTHER_USER', (user) => {
    setUsers((prev) => [...prev, user]);
  });

  socket.on('ENTER_EXIST_ROOM', ({ users, room }) => {
    setUsers(users);
    setRoom(room);
  });

  socket.on('EXIT_USER', (exitId) => {
    setUsers((prev) => prev.filter(({ socketId }) => socketId !== exitId));
  });

  socket.on('TOGGLE_READY', (users) => {
    setUsers(users);
  });

  socket.on('READY_ERROR', () => {
    alert('READY_ERROR');
  });

  const joinRoom = (roomCode) => socket.emit('JOIN_ROOM', { roomCode });

  const ready = (roomCode, isReady) =>
    socket.emit('TOGGLE_READY', { roomCode, isReady });

  const startGame = (roomCode) => socket.emit('START_GAME', { roomCode });

  const disconnecting = () => {
    socket.off('NOT_EXIST_ROOM_ERROR');
    socket.off('FULL_ROOM_ERROR');
    socket.off('OTHER_USER_LIST');
    socket.off('ENTER_OTHER_USER');
    socket.off('EXIT_USER');
    socket.off('TOGGLE_READY');
    socket.off('READY_ERROR');
  };

  return { joinRoom, ready, startGame, disconnecting };
};

export default enter;
