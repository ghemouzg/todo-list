import React, { Component } from "react"

class Todo extends Component {
  render() {
    console.log(this.props.todoList)
    const todoListElements = this.props.todoList.map((todoItem) => (
      <li>{todoItem}</li>
    ))

    return (
      <>
        <label htmlFor="input">Todo</label>
        <input type="text" id="input" />
        <div>
          <div>Items</div>
          <ul>{todoListElements}</ul>
        </div>
      </>
    )
  }
}

export default Todo
