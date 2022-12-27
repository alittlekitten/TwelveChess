/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import profilePicture from '@images/profilePicture.jpg';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setTap } from '@store/user';

const UserUtil = () => {
  const dispatch = useAppDispatch();
  const nickname = useAppSelector((state) => state.user.nickname);

  const goSetNickname = () => {
    dispatch(setTap('SetNickname'));
  };

  return (
    <div css={UserUtilContainer}>
      <div className="profile">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="프로필사진"
        ></img>
      </div>
      <div className="nickname">
        <p>{nickname}</p>
        <button className="set-nickname-btn" onClick={goSetNickname}>
          닉네임 설정
        </button>
      </div>
    </div>
  );
};

const UserUtilContainer = css`
  position: absolute;
  background-color: skyblue;
  width: 15%;
  height: 30%;
  right: 10%;
  bottom: 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .profile {
    .profile-picture {
      width: 80%;
    }
  }

  .nickname {
    .set-nickname-btn {
      height: 34px;
      border: 2px solid black;
      font-family: 'EF_MACHO';
      font-weight: 600;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .set-nickname-btn:hover {
      background-color: yellow;
    }

    .set-nickname-btn:active {
      background-color: yellowgreen;
    }
  }
`;

export default UserUtil;
