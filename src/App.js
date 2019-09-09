import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  render() {
    console.log("App rendered");
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/users" component={Users} />
        <Route path="/board" component={Board} />
      </div>
    );
  }
}

export default App;
