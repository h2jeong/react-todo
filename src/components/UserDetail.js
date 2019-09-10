import React from "react";
import { Link } from "react-router-dom";

const UserDetail = props => {
  console.log(props);
  const _user = props.location.state.user;
  const _userId = props.match.params.id;
  //const _todos = props.location.state.todos;

  return (
    <div>
      {/* <Link to={`/users/${_userId}`}>유저프로필</Link> */}
      <Link
        to={{
          pathname: `/users/${_userId}`,
          state: {
            user: _user,
            imgUrl: `https://randomuser.me/api/portraits/men/${_userId}.jpg`
          }
        }}
      >
        유저프로필
      </Link>
      {/* <Link
        to={{
          pathname: `/users/${_userId}/todos`,
          state: {
            todos: _todos
          }
        }}
      >
        투두 {_todos.length}
      </Link> */}
      <div>
        <p>
          사진 : <img src={props.location.state.imgUrl} alt="" />
        </p>
        <p>이름 : {_user.name}</p>
        <p>이메일 : {_user.email}</p>
        <p>모바일 : {_user.phone}</p>
      </div>
      <Link to="/">Home</Link>
      <Link to="/users">뒤로가기</Link>
    </div>
  );
};

export default UserDetail;
