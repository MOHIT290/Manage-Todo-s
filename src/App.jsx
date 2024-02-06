import { useEffect, useState } from 'react'
import './App.css'
import ToDoform from './Components/ToDoform'
import { ToDoProvider } from './Context/ToDocontext'
import ToDoitem from './Components/ToDoitem'

function App() {

  const [todos, settodos] = useState([])

  // add todo 
  const addToDo = (todo) => {

    settodos((prev) => [...prev, {...todo}])
  }

  // toggle if todo's task completed or not 
  const toggleToDo = (id) => {

    settodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // update todo 
  const updateToDo = (todo, id) => {

    settodos((todos) => todos.map((todoitem) => 
    (todoitem.id === id ? todo: todoitem)))
  }

  // delete todo
  const deleteToDo=(id)=>{

    settodos((todos)=>todos.filter((todoitem)=>todoitem.id!==id))
  }


  useEffect(() => {

    const todoitem = JSON.parse(localStorage.getItem('todos'))

    if (todoitem && todoitem.length > 1) {
      settodos(todoitem)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])


  return (

    <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleToDo }} >
      <div className="bg-[#172842] min-h-screen ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white ">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((todoitem) => (

              <ToDoitem key={todoitem.id} todo={todoitem} />

            ))}

          </div>
        </div>
      </div>

    </ToDoProvider>

  )
}

export default App



