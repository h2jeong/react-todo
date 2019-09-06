import React, { Component } from "react";

class Todos extends Component {
  render() {
    return (
      <div className="todoList">
        <form action="/todo_select" method="get">
          <select>
            <option value="all">모든 투두</option>
            <option value="progress">미완료한 투두</option>
            <option value="complete">완료한 투두</option>
          </select>
          <ul>
            <li>리바운드 연습하기</li>
            <li>자유투 1000개</li>
            <li>제자리 드리블 - 완료</li>
            <li>맨몸 운동 - 완료</li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Todos;
