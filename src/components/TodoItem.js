import React, { Component } from "react"

class TodoItem extends Component {
  render() {
    return (
      <li onClick={this.props.handleClick} className="list-group-item">
        {this.props.todoItem}
      </li>
    )
  }
}

export default TodoItem
