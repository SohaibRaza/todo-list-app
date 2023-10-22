import { baseApi } from "./base";

export const fetchTasks = async (query?: string) => {
  try {
    const response = await baseApi.get(`/tasks${query ? query : ""}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const addTask = async (taskData: Partial<TaskItem>) => {
  try {
    const response = await baseApi.post(`/tasks`, taskData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateTaskStatus = async (taskId: string, status: TaskStatus) => {
  try {
    const response = await baseApi.patch(`/tasks/${taskId}/status`, { status });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (
  taskId: string,
  taskData: Partial<TaskItem>
): Promise<TaskItem> => {
  try {
    const { title, description, status } = taskData;
    const response = await baseApi.put(`/tasks/${taskId}`, {
      title,
      description,
      status,
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    await baseApi.delete(`/tasks/${taskId}`);
  } catch (error) {
    throw error;
  }
};
