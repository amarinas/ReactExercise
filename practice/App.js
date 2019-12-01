import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor(){
    super()
    this.state ={
            items: todosData
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(id){
      this.setState(prevState =>
        const updatedItems = prevState.items.map(item =>
          if (item.id === id){
            item.completed = !item.completed
          }
        return item
      })
        reutrn{
          items: updatedItems
        }
      })

    }
    render(){
        const todoItems = this.state.items.map(item => <TodoItem key={item.id} item={item}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )

    }

  }

export default App
