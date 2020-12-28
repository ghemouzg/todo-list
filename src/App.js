import React, { Component } from "react"
import "./styles.css"
import Todo from "./components/Todo"

class App extends Component {
  render() {
    console.log('render')
    const todoList = ['eat', 'dance', 'eat', 'sleep']
    return (
      <div className="container">
        <Todo todoList={todoList}/>
      </div>
    )
  }
}

export default App
