import React, { useState } from 'react'
import useToDo from '../Context/ToDocontext'

function ToDoform() {

  const [todomsg, settodomsg] = useState("")

  const { addToDo } = useToDo()

  const add = (e) => {
    e.preventDefault();
    addToDo({ id: Date.now(), msg: todomsg, completed: false })
    settodomsg("")
  }


  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  )
}

export default ToDoform



