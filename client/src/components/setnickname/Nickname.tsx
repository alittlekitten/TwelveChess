/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setNickname, setTap } from '@store/user';
import { useNavigate } from 'react-router-dom';

const Nickname = () => {
  const dispatch = useAppDispatch();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const nickname = useAppSelector((state) => state.user.nickname);
  const navigate = useNavigate();

  const goWaitingRoom = () => {
    // Todo : 공백처리 필요
    dispatch(setNickname(nicknameRef.current?.value));
    navigate('/waiting');
  };

  return (
    <div>
      <div css={nicknameContainer}>
        <input
          className="nicknameInput"
          placeholder="닉네임을 입력해주세요"
          type="text"
          ref={nicknameRef}
        ></input>
        <button className="nicknameBtn" onClick={goWaitingRoom}>
          NEXT
        </button>
      </div>
    </div>
  );
};

const nicknameContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;

  width: 450px;
  height: 120px;

  background: #f4f4f4;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .nicknameInput {
    margin-right: 1rem;
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid #ffff7f;
    font-family: 'EF_MACHO';
    font-size: 1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .nicknameInput:focus {
    background-color: #ffffc4;
  }

  .nicknameBtn {
    height: 34px;
    border: 2px solid #ffff7f;
    font-family: 'EF_MACHO';
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .nicknameBtn:hover {
    background-color: #ffffc4;
  }
  .nicknameBtn:active {
    background-color: #d6d600;
  }
`;

export default Nickname;
