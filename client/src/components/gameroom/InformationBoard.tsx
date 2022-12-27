/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const InformationBoard = (props) => {
  const { info } = props;
  console.log(info);

  return (
    <div css={InformationBoardContainer}>
      <p>방 제목 : {info.roomName}</p>
      <p>현재 인원 : {Object.keys(info.users).length} / 2</p>
    </div>
  );
};

const InformationBoardContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 20%;
  height: 24%;
  right: 5%;
  top: 10%;
`;

export default InformationBoard;
