import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todo";

export const Store = configureStore({
    reducer: 
    {
        tasks: todoSliceReducer,
    }
});