import React, { useState } from 'react'
import useToDo from '../Context/ToDocontext'

function ToDoitem({ todo }) {

    const { toggleToDo, deleteToDo, updateToDo } = useToDo()
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoinputvalue, settodoinputvalue] = useState(todo.msg)

    const toggleinput = () => {

        toggleToDo(todo.id)

    }

    const deleteitem = () => {
        deleteToDo(todo.id)

    }

    const edittodo = () => {
        // donot pass todo directly, instead use spread operator
        updateToDo({ ...todo, msg: todoinputvalue }, todo.id)
        setisTodoEditable(false)
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onClick={toggleinput}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                readOnly={!isTodoEditable}
                value={todoinputvalue}
                onChange={(e) => settodoinputvalue(e.target.value)}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {

                    if (todo.completed) return;

                    if (isTodoEditable) {
                        edittodo()
                    }

                    else {
                        setisTodoEditable((prev) => !prev)
                    }
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={deleteitem}
            >
                ❌
            </button>
        </div>
    )
}

export default ToDoitem
