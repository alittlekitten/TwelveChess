/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Socket from "../../socket/socket";

const CreateRoomModal = (props) => {
  const { setTap, setIsModalOn } = props;
  const createRoom = () => {
    setIsModalOn(false);
    setTap("GameRoom");
  };
  const offCreateModal = () => {
    setIsModalOn(false);
  };
  return (
    <div css={BackgroundDimmingContainer}>
      <div css={ModalContainer}>
        <div className="inputs">
          방 이름 : <input className="room-name-input"></input>
        </div>
        <div className="btns">
          <button className="create-btn" onClick={createRoom}>
            방 생성
          </button>
          <button className="cancel-btn" onClick={offCreateModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

const BackgroundDimmingContainer = css`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalContainer = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  background-color: white;
  .inputs {
    .room-name-input {
      margin-right: 1rem;
      width: 300px;
      height: 30px;
      border-radius: 10px;
      border: 2px solid #ffff7f;
      font-family: "EF_MACHO";
      font-size: 1rem;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      margin: 1rem;
    }
  }

  .btns {
    & > * {
      margin: 0.5rem;
    }
    .create-btn {
      height: 34px;
      background-color: #ffff7f;
      border: none;
      font-family: "EF_MACHO";
      font-weight: 600;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .create-btn:hover {
      background-color: #ffffc4;
    }
    .create-btn:active {
      background-color: #d6d600;
    }
    .cancel-btn {
      height: 34px;
      background-color: red;
      border: none;
      font-family: "EF_MACHO";
      font-weight: 600;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .cancel-btn:hover {
      background-color: pink;
    }
    .cancel-btn:active {
      background-color: darkred;
    }
  }
`;

export default CreateRoomModal;
