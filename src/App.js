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
        todoList: newList
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
    console.log("render")
    console.log("value", this.state.value)
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="input">Todo</label>
          <input
            type="text"
            id="input"
            onChange={this.changeValue}
            value={this.state.value}
          />
          <button onClick={this.addItem}>add item</button>
        </form>
        <Todo todoList={this.state.todoList} />
      </div>
    )
  }
}

export default App
