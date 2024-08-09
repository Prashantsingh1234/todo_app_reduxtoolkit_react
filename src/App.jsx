import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>to do app using redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
