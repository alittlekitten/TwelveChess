/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const User2Info = () => {
  return (
    <div css={User2InfoContainer}>
      <p>유저2 정보</p>
    </div>
  );
};

const User2InfoContainer = css`
  position: absolute;
  background-color: #b2b2b2;
  width: 40%;
  height: 13%;
  right: 30%;
  bottom: 3%;
`;

export default User2Info;
