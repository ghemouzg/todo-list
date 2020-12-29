import React, { Component } from "react"
import "./styles.css"
import Todo from "./components/Todo"

class App extends Component {
  state = {
    todoList: ["eat", "dance", "eat", "sleep", "sleep"],
    value: ""
  }

  addItem = (e) => {
    e.preventDefault()

    this.setState((prevState) => {
      const newList = prevState.todoList.concat()
      newList.push(prevState.value)
      return {
        todoList: newList,
        value: ""
      }
    })
  }

  changeValue = (e) => {
    const { value } = e.target
    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="input">Todo: </label>
          <input
            type="text"
            id="input"
            onChange={this.changeValue}
            value={this.state.value}
            className="m-3"
          />
          <button
            onClick={this.addItem}
            className="btn btn-primary btn-sm mx-2"
          >
            add item
          </button>
        </form>
        <Todo todoList={this.state.todoList} />
      </div>
    )
  }
}

export default App
