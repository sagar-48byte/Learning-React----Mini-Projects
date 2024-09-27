import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            const Todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(Todo)
        },

        removeTodo: (state, action)=> {
            state.todos = state.todos.filter((Todo) => Todo.id !== action.payload )
        },

        // updateTodo: (state, action) => {
        //     const   newTxt = action.payload.text
        //     const todo = state.todos.find((todo)=> todo.id == action.payload)
        //     if(todo)    todo.text = newTxt;
        // }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer