/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const RoomList = (props) => {
  const { setTap } = props;
  const goGameRoom = () => {
    setTap("GameRoom");
  };

  return (
    <div css={RoomListContainer}>
      <div className="room">
        <br />방 제목: 나는 안됐네~
        <div>
          <button className="enter" onClick={goGameRoom}>
            입장
          </button>
        </div>
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
    margin-top: 2rem;
    margin-left: 4rem;
    margin-right: 4rem;
    width: 40%;
    height: 40%;
    background-color: dodgerblue;
  }
  .enter {
    margin-top: 2rem;
    width: 40%;
    height: 100%;
    border: 2px solid #ffff7f;
    font-family: "EF_MACHO";
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .enter:hover {
    background-color: yellow;
  }
`;

export default RoomList;
