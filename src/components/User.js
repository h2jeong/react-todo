import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    console.log("User rendered", this.state);
    return (
      <div className="user">
        <Link to="/user/:id">선택</Link>
        <Link to="/users">뒤로가기</Link>
      </div>
    );
  }
}

export default User;
