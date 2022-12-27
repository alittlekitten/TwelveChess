import { useEffect } from 'react';
import BackBtn from '@components/gameroom/BackBtn';
import GameBoard from '@components/gameroom/GameBoard';
import GameChatRoom from '@components/gameroom/GameChatRoom';
import InformationBoard from '@components/gameroom/InformationBoard';
import User1Info from '@components/gameroom/User1Info';
import User2Info from '@components/gameroom/User2Info';
import Socket from '@socket/socket';
import { roomsAPI } from '@api/room';
import { useQuery } from 'react-query';
import { useAppSelector } from '@store/hooks';

const GameRoom = () => {
  const roomCode = useAppSelector((state) => state.user.roomCode);
  console.log('룸코드', roomCode);
  const roomData = useQuery('roomData', () => roomsAPI(roomCode));
  console.log('데이터1', roomData);

  useEffect(() => {
    Socket.connect();
    return;
  }, []);

  if (roomData.isLoading)
    return (
      <>
        <p>loading...</p>
      </>
    );

  return (
    <div>
      <BackBtn />
      <GameBoard />
      <GameChatRoom />
      <InformationBoard info={roomData.data?.data} />
      <User1Info />
      <User2Info />
    </div>
  );
};

export default GameRoom;
