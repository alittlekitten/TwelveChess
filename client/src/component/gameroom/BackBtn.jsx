/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const BackBtn = (props) => {
  const { setTap } = props;
  const goWaitingRoom = () => {
    setTap("WaitingRoom");
  };

  return (
    <div css={goWaitingRoomButton}>
      <button className="go-waiting-room-btn" onClick={goWaitingRoom}>나가기</button>
    </div>
  );
};
const goWaitingRoomButton = css`
position: absolute;
width: 10%;
left: 5%;
bottom: 5%;
.go-waiting-room-btn {
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

.go-waiting-room-btn:hover {
  background-color: yellow;
}
`;

export default BackBtn;
