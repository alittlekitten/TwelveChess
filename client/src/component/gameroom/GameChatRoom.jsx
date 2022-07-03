/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const GameChatRoom = () => {
  return (
    <div css={GameChatRoomContainer}>
      <div className="chat-content">
        <p>조효은: 나는 됐네~</p>
        <p>dbwlsanes: 나도 됐네~</p>
      </div>
      <div className="chat-input">
        <input type="text" className="input-box"></input>
        <button className="input-btn">SEND</button>
      </div>
    </div>
  );
};

const GameChatRoomContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 20%;
  height: 55%;
  right: 5%;
  bottom: 10%;

  .chat-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 0.8rem;
    margin: 1%;
    padding: 1%;
    height: 85%;
    border: 1px dashed;

    p {
      text-align: left;
    }
  }
  .chat-input {
    position: absolute;
    display: flex;
    width: 96%;
    bottom: 5%;
    left: 2%;
    .input-box {
      margin-right: 1rem;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 2px solid #ffff7f;
      font-family: "EF_MACHO";
      font-size: 1rem;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .input-btn {
      border: 2px solid #ffff7f;
      font-family: "EF_MACHO";
      font-weight: 600;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .input-btn:hover {
      background-color: yellow;
    }
  }
`;

export default GameChatRoom;
