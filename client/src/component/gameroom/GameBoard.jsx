/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const GameBoard = () => {
  return (
    <div css={GameBoardContainer}>
      <p>게임판</p>
    </div>
  );
};

const GameBoardContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 30%;
  height: 60%;
  left: 30%;
  top: 20%;
`;

export default GameBoard;
