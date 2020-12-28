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
    const newList = this.state.todoList
    newList.push(this.state.value)
    this.setState({
      todoList: newList
    })
  }

  changeValue = (e) => {
    const newValue = e.target.value
    this.setState({
      value: newValue
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
