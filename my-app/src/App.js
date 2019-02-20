import React, { Component } from "react";
import MyTodos from "./components/MyTodos";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { title: " First title", id: 1, isChecked: false };
  }
  render() {
    return (
      <div className="App">
        <MyTodos>{this.state.title}</MyTodos>
      </div>
    );
  }
}

export default App;
