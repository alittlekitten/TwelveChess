/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const User1Info = () => {
  return (
    <div css={User1InfoContainer}>
      <p>유저1 정보</p>
    </div>
  );
};

const User1InfoContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 40%;
  height: 13%;
  left: 20%;
  top: 3%;
`;

export default User1Info;
