import React, { Component } from "react"
import TodoItem from "./TodoItem"

class Todo extends Component {
  render() {
    const todoListElements = this.props.todoList.map((todoItem, index) => (
      <TodoItem todoItem={todoItem} key={index} />
    ))

    return (
      <>
        <h3>Items</h3>
        <ul className="list-group">{todoListElements}</ul>
      </>
    )
  }
}

export default Todo
