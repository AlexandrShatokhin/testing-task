import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Filter, TodosState } from "../../types/todo";

const initialState: TodosState = {
    items: JSON.parse(localStorage.getItem("todos") || "[]"),
    filter: "all",
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.items.push({
                id: Date.now().toString(),
                text: action.payload,
                completed: false,
            });
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const todo = state.items.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.items = state.items.filter((t) => t.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        editTodo(state, action: PayloadAction<{ id: string; text: string }>) {
            const todo = state.items.find((t) => t.id === action.payload.id);
            if (todo) todo.text = action.payload.text;
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        setFilter(state, action: PayloadAction<Filter>) {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, toggleTodo, removeTodo, editTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
