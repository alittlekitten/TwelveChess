/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profilePicture from "../../images/profilePicture.jpg";

const UserUtil = (props) => {
  const { setTap } = props;
  const goSetNickname = () => {
    setTap("SetNickname");
  };

  return (
    <div css={UserUtilContainer}>
      <div className="profile">
        <img className="profile-picture" src={profilePicture}></img>
      </div>
      <div className="nickname">
        <p>토뱅병찬</p>
      </div>

      <button className="set-nickname-btn" onClick={goSetNickname}>
        닉네임 설정
      </button>
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

  .profile {
    position: absolute;
    left: 15%;
    top: 15%;
    bottom: 15%;
    width: 70%;
    height: 70%;
    .profile-picture {
      width: 80%;
    }
  }

  .nickname {
    display: flex;
    align-items: center;
    position: absolute;
    height: 36px;
    left: 10%;
    bottom: 10%;

    p {
      margin: 0px;
    }
  }
  .set-nickname-btn {
    position: absolute;
    height: 36px;
    right: 10%;
    bottom: 10%;

    height: 34px;
    border: 2px solid black;
    font-family: "EF_MACHO";
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .set-nickname-btn:hover {
    background-color: yellow;
  }
`;

export default UserUtil;
