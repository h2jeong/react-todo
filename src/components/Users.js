import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("users rendered", this.props);
    const { users, onSelect, selectedUser, todos } = this.props;
    const userList = users.map(user => (
      <UserList user={user} onSelect={onSelect} key={user.id} />
    ));
    const _user = users[selectedUser - 1];

    return (
      <div className="users">
        <Link to="/">Home</Link>
        <h3>유저리스트</h3>
        {userList}
        <Link
          to={{
            pathname: `/users/${selectedUser}`,
            state: {
              user: _user,
              todos: todos,
              imgUrl: `https://randomuser.me/api/portraits/men/${selectedUser}.jpg`
            }
          }}
        >
          선택
        </Link>
        <Link to="/">뒤로가기</Link>
      </div>
    );
  }
}

export default Users;
