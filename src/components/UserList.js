import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("UserList rendered", this.props);

    let userList = [];
    if (this.props.users && this.props.users.length > 0) {
      userList = this.props.users.map(user => (
        <div key={user.id}>
          <input type="radio" name="selectUserId" value={user.id} />
          <label>{user.name}</label>
        </div>
      ));
    }

    return <div>{userList}</div>;
  }
}

export default UserList;
