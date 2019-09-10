import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Todos rendered", this.props);
    const { todos } = this.props;
    const todoList = todos.map(item => <TodoItem item={item} key={item.id} />);
    return (
      <div className="todoList">
        <form action="/todo_select" method="get">
          <select>
            <option value="all">모든 투두</option>
            <option value="progress">미완료한 투두</option>
            <option value="complete">완료한 투두</option>
          </select>
          <ul>
            {/* <li>리바운드 연습하기</li>
            <li>자유투 1000개</li>
            <li>제자리 드리블 - 완료</li>
            <li>맨몸 운동 - 완료</li> */}
            {todoList}
          </ul>
        </form>
      </div>
    );
  }
}

export default Todos;
