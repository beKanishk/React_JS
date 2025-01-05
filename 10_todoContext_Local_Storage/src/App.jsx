import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts/TodoContexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])//this is an array of todos objects it has id, todo, completed

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )//...prev this is spread object all the values will be same except the values that we will change
  }

  const updateTodo = (id, todo) => { // here todo is a complete todo object
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))//if true then replace new todo or use the same old one
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))//filter -> Returns the elements of an array that meet the condition specified in a callback function.
    //here filter will not allow that todo to be in array whose id matches with the id that has to be deleted
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

//localStorage always return values in string and also accept values in strings

//this useEffect will run 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log("useEffect runs here")
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  //whenever there is a change in todos setItem will update the local storage values
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App