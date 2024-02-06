import React, { createContext, useContext } from "react";

export const ToDocontext = createContext({

    todos: [
        {
            id: "",
            msg: "",
            completed: false
        }
    ],

addToDo:()=>{},
updateToDo:()=>{},
deleteToDo:()=>{},
toggleToDo:()=>{}

})


export const ToDoProvider = ToDocontext.Provider;

export default function useToDo() {

    return useContext(ToDocontext)

}





