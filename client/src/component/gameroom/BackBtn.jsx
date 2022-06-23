/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const BackBtn = (props) => {
  const { setTap } = props;
  const goWaitingRoom = () => {
    setTap("WaitingRoom");
  };

  return (
    <div>
      <button onClick={goWaitingRoom}>나가기</button>
    </div>
  );
};

export default BackBtn;
