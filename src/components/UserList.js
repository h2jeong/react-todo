import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Nav from "./Nav";
import User from "./User";
import UserDetail from "./UserDetail";
import Todos from "./Todos";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectUserId: null
    };
  }
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
      [e.target.name]: e.target.value
    });
  };

  // _getUser() {
  //   if (!this.state.selectUser) return;
  //   var i = 0;
  //   while (i < this.state.users.length) {
  //     var user = this.state.users[i];
  //     if (user.id === this.state.selectUser) {
  //       return user;
  //     }
  //     i += 1;
  //   }
  // }

  _handleChangePage() {}

  render() {
    console.log("UserList rendered", this.state);

    let userList = [];
    if (this.state.users && this.state.users.length > 0) {
      userList = this.state.users.map(user => (
        <li key={user.id}>
          <input
            type="radio"
            name="selectUserId"
            onChange={this._handleSelectUser}
            value={user.id}
          />
          {user.name}
        </li>
      ));
    }
    // let _user,
    //   _todos = null;
    // if (this.state.userSelect) {
    //   _user = this.state.user;
    //   _todos = this._getUserTodo();
    // }
    // console.log("_user:", _user, ", todos:", _todos);
    // let _userSelect = this.state.userSelect;
    // console.log("_userSelect:", _userSelect);

    return (
      <div>
        <Nav />
        <div className="userList">
          <form action="select_user" method="post">
            <h2>유저리스트</h2>
            <ul>{userList}</ul>
            <Link to="/user/:id">투두</Link>
            <button type="button">뒤로가기</button>
          </form>
          <Route path="/user" component={User} />
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/todos?userId={id}" component={Todos} />
        </div>
      </div>
    );
  }
}

export default UserList;
