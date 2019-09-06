import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/">뒤로가기</Link>
      </nav>
    );
  }
}

export default Nav;
