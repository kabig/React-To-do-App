import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyles = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: 10,
      borderBottom: '1px #ccc dotted '
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyles()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markcomplete.bind(this, id)}
          />{' '}
          {title}
          <button
            style={btn}
            type="button"
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}
const btn = {
  backgroundColor: 'red',
  padding: '5px 9px',
  cursor: 'pointer',
  borderRadius: '50%',
  float: 'right',
  color: 'white'
};

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;
