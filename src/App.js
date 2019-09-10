import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Todos from "./components/Todos";
import Board from "./components/Board";

class App extends Component {
  state = {
    selected_user_id: 1
  };

  componentDidMount() {
    this._getUsers();
    this._getTodos(this.state.selected_user_id);
  }

  _getUsers() {
    fetch("https://koreanjson.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users });
      })
      .catch(error => console.log(error));
  }

  _getTodos(id) {
    fetch(`http://koreanjson.com/todos?userId=${id}`)
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos: todos });
      })
      .catch(error => console.log(error));
  }

  HandleSelect = e => {
    console.log(e.target.value);
    this.setState({
      selected_user_id: Number(e.target.value)
    });
  };

  render() {
    console.log("App rendered");
    let _users = this.state.users ? this.state.users : this._getUsers();
    let _userId = this.state.selected_user_id;
    let _todos = this.state.todos ? this.state.todos : this._getTodos(_userId);
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Switch>
          <Route
            exact
            path="/users"
            render={() => (
              <Users
                users={_users}
                onSelect={this.HandleSelect}
                selectedUser={_userId}
                todos={_todos}
              />
            )}
          />
          <Route path="/users/:id" component={UserDetail} />
        </Switch>
        <Route path="/users/:id/todos" component={Todos} />
        <Route path="/board" component={Board} />
      </div>
    );
  }
}

export default App;
