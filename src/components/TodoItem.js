import React, { Component } from "react"

class TodoItem extends Component {
  render() {
    return <li className="list-group-item">{this.props.todoItem}</li>
  }
}

export default TodoItem
