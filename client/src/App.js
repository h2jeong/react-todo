import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Todos from "./components/Todos";
import Board from "./components/Board";

class App extends Component {
  state = {};

  componentDidMount() {
    this._callApi()
      .then(res =>
        this.setState({
          users: res
        })
      )
      .catch(err => console.log(err));
  }
  _callApi = async () => {
    const response = await fetch("/api/users");
    const body = await response.json();
    //console.log("body:", body);
    return body;
  };

  _getTodos = id => {
    fetch("/api/todos")
      .then(response => response.json())
      .then(data => {
        console.log("todos:", data);
        let todos = data.filter(todo => todo.userId === id);
        this.setState({ todos: todos });
      })
      .catch(error => console.log(error));
  };

  _handleSelect = e => {
    const selected = Number(e.target.value);
    const selectedUser = this.state.users ? this.state.users[selected - 1] : {};
    this._getTodos(selected);
    this.setState({
      selected_user_id: selected,
      selected_user: selectedUser
    });
  };

  render() {
    console.log("app rendered:", this.state);
    let _userId = this.state.selected_user_id;
    let _todos = _userId ? this.state.todos : [];

    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Switch>
          <Route
            exact
            path="/users"
            render={() => (
              <Users
                users={this.state.users}
                onSelect={this._handleSelect}
                userId={_userId}
              />
            )}
          />
          <Route
            exact
            path="/users/:id"
            render={() => (
              <UserDetail
                userId={_userId}
                user={this.state.selected_user}
                todoLength={_todos.length}
              />
            )}
          />
          <Route
            path="/users/:id/todos"
            render={() => <Todos userId={_userId} todos={_todos} />}
          />
        </Switch>
        <Route path="/board" component={Board} />
      </div>
    );
  }
}

export default App;
