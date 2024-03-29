/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const UserList = () => {
  return (
    <div css={UserListContainer}>
      <div className="title">
        <h3>접속자</h3>
        <hr />
      </div>
      <div className="user-list">
        <p>토뱅병찬</p>
        <p>조효은</p>
        <p>dbwlsanes</p>
      </div>
    </div>
  );
};

const UserListContainer = css`
  position: absolute;
  background-color: gray;
  width: 15%;
  height: 40%;
  right: 10%;
  top: 10%;

  .user-list {
    margin: 1rem;
    font-size: 0.75rem;
  }
`;

export default UserList;
