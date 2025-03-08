import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(), text: action.payload.text, priority: action.payload.priority || 'Medium', category: action.payload.category || 'indoor',
            };
            state.tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        updateTaskPriority: (state, action) => {
            const { id, priority } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) task.priority = priority;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
});

export const { addTask, deleteTask, updateTaskPriority } = todoSlice.actions;
export default todoSlice.reducer;