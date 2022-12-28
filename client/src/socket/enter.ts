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
    // setUsers((pr) => [...pr, user]);
    console.log("받아온유저", user);
    console.log("셋아더유저", setUsers);   
    setUsers(user);
  });

  socket.on('ENTER_EXIST_ROOM', (users) => {
    
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

  const joinRoom = (data) => socket.emit('ENTER_ROOM', data);

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
