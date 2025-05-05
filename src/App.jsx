import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect } from "react";

function App() {

  // const todos = [
  //   { input: "Hello, add your first Todo task!", complete: true },
  //   { input: "Get the groceries", complete: false },
  //   { input: "Learn how to web design", complete: true },
  //   { input: "Say hi to gran gran", complete: false }
  // ]

  const [todos, setTodos] = useState([
    {input: "Hello! Add your first task.", complete: true}
  ])

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const [selectedTab, setSelectedTab] = useState('')


  function handleCompleteTodo(index) {
    // update/modify/edit a Todo
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex != index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos:
      currTodos
     }))
  }

  useEffect(() => {
    if( !localStorage || !localStorage.getItem('todo-app') ) { 
      return }
      console.log('here')
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
  }, [])

  return (
    <>

      <Header todos = {todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos = {todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos = {todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
