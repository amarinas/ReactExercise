import React from "react"
import ReactDom from "react-dom"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todoItems: todoData.map(item => </TodoItem key={item.id} item={item} />)

      }
    }
    render(){
      return(
        <div className="todo-list">
            {this.todoItems}
        </div>
      )
  }
}

export default App
