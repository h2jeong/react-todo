import React from "react";
import { Link } from "react-router-dom";

const UserDetail = ({ user, userId, todoLength }) => {
  return (
    <div>
      <Link to={`/users/${userId}`}>유저프로필</Link>
      <Link to={`/users/${userId}/todos`}>투두{todoLength}</Link>
      <div>
        <p>
          <img
            src={`https://randomuser.me/api/portraits/men/${userId}.jpg`}
            alt=""
          />
        </p>
        <p>이름 : {user.name}</p>
        <p>이메일 : {user.email}</p>
        <p>모바일 : {user.phone}</p>
      </div>
      <Link to="/">Home</Link>
      <Link to="/users">뒤로가기</Link>
    </div>
  );
};

export default UserDetail;
