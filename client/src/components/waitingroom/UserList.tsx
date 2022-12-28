/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

interface IUserData {
  nickname: String;
}

const UserList = (props) => {
  console.log("이친구", props.accessor);

  return (
    <div css={UserListContainer}>
      <div className="title">
        <h3>접속자</h3>
        <hr />
      </div>
      <div className="user-list">
        {props.accessor.map((elem, i) =><p key={i}>{elem}</p>)}
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
