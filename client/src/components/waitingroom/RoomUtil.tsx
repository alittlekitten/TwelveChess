/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const RoomUtil = (props) => {
  const { setIsModalOn } = props;
  const onCreateModal = () => {
    setIsModalOn(true);
  };
  const filterWaitingRoom = () => {
    // 구현 예정
  };
  return (
    <div css={RoomUtilContainer}>
      <button className="filter-waiting-room" onClick={filterWaitingRoom}>
        빈 방 보기
      </button>
      <button className="create-room" onClick={onCreateModal}>
        방 생성하기
      </button>
    </div>
  );
};

const RoomUtilContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 60%;
  height: 5%;
  left: 10%;
  top: 50%;
  border-top: 3px solid;
  display: flex;
  justify-content: right;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }

  .filter-waiting-room {
    height: 34px;
    background-color: #a4fff6;
    border: none;
    font-family: 'EF_MACHO';
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .filter-waiting-room:hover {
    background-color: #e4fff6;
  }

  .filter-waiting-room:active {
    background-color: #04fff6;
  }

  .create-room {
    height: 34px;
    background-color: #ffd258;
    border: none;
    font-family: 'EF_MACHO';
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .create-room:hover {
    background-color: #ffeaaf;
  }

  .create-room:active {
    background-color: #ffbb00;
  }
`;

export default RoomUtil;
