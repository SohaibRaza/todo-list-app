declare type TaskStatus = "pending" | "completed"

declare interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
