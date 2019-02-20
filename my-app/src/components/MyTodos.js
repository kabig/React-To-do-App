import React, { Component } from "react";

class MyTodos extends Component {
  render() {
    return <div className="Todo">{this.props.children}</div>;
  }
}

export default MyTodos;
