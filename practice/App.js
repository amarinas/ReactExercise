import React from "react"
import ReactDom from "react-dom"
import TodoItem from "./components/TodoItem"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App
