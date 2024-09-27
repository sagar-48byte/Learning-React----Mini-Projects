import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Item",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    UpdateTodo: (id, todo) => {},
    deleteTodo: (id) => {}, 
    ToggleComplete: (id) => {}
})


export const useToDo = ()=> {
    return useContext(TodoContext)
}

export const ToDoProvider = TodoContext.Provider