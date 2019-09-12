import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "all"
    };
  }

  _handleChange = e => {
    this.setState({
      option: e.target.value
    });
  };

  render() {
    console.log("Todos rendered", this.props);
    const { userId, todos } = this.props;
    let _todos = Array.from(todos);
    if (this.state.option === "all") {
      _todos = todos;
    } else if (this.state.option === "completed") {
      _todos = todos.filter(item => item.completed);
    } else if (this.state.option === "notCompleted") {
      _todos = todos.filter(item => !item.completed);
    }

    const todoList = _todos.map(item => <li key={item.id}>{item.title}</li>);

    return (
      <div className="todoList">
        <Link to={`/users/${userId}`}>유저프로필</Link>
        <Link to={`/users/${userId}/todos`}>
          투두<b>{_todos.length}</b>
        </Link>
        <div>
          <select
            defalutvalue={this.state.option}
            onChange={this._handleChange}
          >
            <option value="all">모든 투두</option>
            <option value="notCompleted">미완료한 투두</option>
            <option value="completed">완료한 투두</option>
          </select>
          <ul>{todoList}</ul>
        </div>
        <Link to="/">Home</Link>
        <Link to={`/users/${userId}`}>뒤로가기</Link>
      </div>
    );
  }
}

export default Todos;
