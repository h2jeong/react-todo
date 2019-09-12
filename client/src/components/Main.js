import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h2>어플리케이션을 골라주세요</h2>
      <Link to="users">투두</Link>
      <Link to="board">게시판</Link>
    </div>
  );
};

export default Main;
