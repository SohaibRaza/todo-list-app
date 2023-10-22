import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as actions from "./actions";

const initialState: {
  tasks: TaskItem[];
} = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskItem>) => {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action: PayloadAction<TaskItem>) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (taskToUpdate) {
        taskToUpdate.status =
          taskToUpdate.status === "pending" ? "completed" : "pending";
      }
    },
    deleteTask: (state, action: PayloadAction<TaskItem>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(actions.addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(actions.updateTaskStatus.fulfilled, (state, action) => {
        const updatedTask = state.tasks.find(
          (task) => task.id === action.payload.id
        );
        if (updatedTask) {
          updatedTask.status = action.payload.status;
        }
      })
      .addCase(actions.updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        if (!updatedTask) {
          return;
        }
        const index = state.tasks.findIndex(
          (task) => task.id === updatedTask.id
        );
        if (index !== -1) {
          state.tasks[index] = updatedTask;
        }
      })
      .addCase(actions.deleteTask.fulfilled, (state, action: any) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
