import React, { Component } from "react"

class Todo extends Component {
  render() {
    console.log(this.props.todoList)
    const todoListElements = this.props.todoList.map((todoItem, index) => (
      <li key={index}>{todoItem}</li>
    ))

    return (
      <>
        <div>Items</div>
        <ul>{todoListElements}</ul>
      </>
    )
  }
}

export default Todo
