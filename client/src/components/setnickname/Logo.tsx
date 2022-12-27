/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const GoBtn = () => {
  return (
    <div>
      <p css={logoStyle}>십이장기</p>
    </div>
  );
};

const logoStyle = css`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 80px;
  font-family: 'EF_MACHO';
`;

export default GoBtn;
