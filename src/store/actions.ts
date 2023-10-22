import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksService from "../services/tasksService";
import toast from "react-hot-toast";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (query?: string) => {
  return await tasksService.fetchTasks(query);
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: Partial<TaskItem>) => {
    try {
      const addedTask = await tasksService.addTask(task);
      toast.success("Task added successfully");
      return addedTask;
    } catch (error) {
      toast.error("Failed to add task");
    }
  }
);

export const updateTaskStatus = createAsyncThunk(
  "tasks/updateTaskStatus",
  async ({ id, status }: { id: string; status: TaskStatus }) => {
    try {
      const updatedTask = await tasksService.updateTaskStatus(id, status);
      toast.success("Task status updated successfully");
      return updatedTask;
    } catch (error) {
      toast.error("Failed to update task status");
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (updatedTask: TaskItem) => {
    try {
      const task = await tasksService.updateTask(updatedTask.id, updatedTask);
      toast.success("Task updated successfully");
      return task;
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to update task"
      );
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId: string) => {
    try {
      await tasksService.deleteTask(taskId);
      toast.success("Task deleted successfully");
      return taskId;
    } catch (error) {
      toast.error("Failed to delete task");
      throw error;
    }
  }
);
