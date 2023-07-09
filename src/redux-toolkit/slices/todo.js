import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"tasks",
    initialState:[],
    reducers:
    {
        addTask: (state,action) => {
            const task = {
                id: new nanoid(),
                name: action.payload.text
            }
            state.push(task);
        },
        deleteTask: (state,action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
    }
})

export const {addTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer;