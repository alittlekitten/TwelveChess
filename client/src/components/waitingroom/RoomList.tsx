/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { setTap } from '@store/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goGameRoom = (code: string) => {
    navigate(`/game/${code}`);
  };

  return (
    <div css={RoomListContainer}>
      <div className="room">
        <p className="title">1. 나는 안됐네~</p>
        <p className="participants">인원수 1/2</p>
        <button className="enter" onClick={() => goGameRoom('testcode')}>
          입장
        </button>
      </div>
    </div>
  );
};

const RoomListContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 60%;
  height: 40%;
  left: 10%;
  top: 10%;
  border: 1px dashed;
  .room {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 40%;
    height: 40%;
    background-color: dodgerblue;

    .enter {
      width: 40%;
      height: 2rem;
      border: 2px solid #ffff7f;
      font-family: 'EF_MACHO';
      font-weight: 600;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .enter:hover {
      background-color: yellow;
    }
  }
`;

export default RoomList;
