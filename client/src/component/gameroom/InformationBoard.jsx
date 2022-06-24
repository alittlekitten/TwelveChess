/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const InformationBoard = () => {
return (
    <div css={InformationBoardContainer}>
    <p >정보나 광고 넣을 창</p>
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
