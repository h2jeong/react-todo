import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import UserDetail from "./UserDetail";

class Users extends Component {
  state = {};

  componentDidMount() {
    console.log("The link was clicked.");
    const myInit = {
      method: "GET",
      dataType: "json",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    };

    fetch("https://koreanjson.com/users", myInit)
      .then(response => response.json())
      .then(json =>
        this.setState({
          users: json
        })
      )
      .catch(err => console.log(err));
  }

  _handleSelectUser = e => {
    this.setState({
      selectUserId: e.target.value
    });
  };

  _getUser() {
    if (!this.state.selectUser) return;
    var i = 0;
    while (i < this.state.users.length) {
      var user = this.state.users[i];
      if (user.id === this.state.selectUser) {
        return user;
      }
      i += 1;
    }
  }

  render() {
    console.log("Users rendered", this.state);
    let userList = [];
    if (this.state.users && this.state.users.length > 0) {
      userList = this.state.users.map(user => (
        <div key={user.id}>
          <input type="radio" name="selectUserId" value={user.id} />
          <label>{user.name}</label>
        </div>
      ));
    }

    return (
      <div>
        <Nav />
        <div className="userList">
          <h2>유저리스트</h2>
          {userList}
          <button type="button">선택</button>
          <button type="button">뒤로가기</button>
        </div>

        <Route path="/user/:id" component={UserDetail} />
      </div>
    );
  }
}

export default Users;
