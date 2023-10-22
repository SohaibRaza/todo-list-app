import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTaskStatus, deleteTask } from "../store/actions";
import { AppDispatch } from "~/store";
import EditTaskForm from "./EditTask";
import EditTask from "./EditTask";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: "pending" | "completed";
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateTaskStatus = () => {
    dispatch(
      updateTaskStatus({
        id: task.id,
        status: task.status === "pending" ? "completed" : "pending",
      })
    );
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className="flex items-center justify-between mt-2 p-2 border rounded">
      <span className={task.status === "completed" ? "line-through" : ""}>
        {task.title}
      </span>
      <div>
        <button
          className="mr-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="mr-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleUpdateTaskStatus}
        >
          {task.status === "completed" ? "Undo" : "Complete"}
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
      {isEditing && (
        <EditTask
          task={task}
          onSave={(updatedTask: TaskItem) => {
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </li>
  );
};

export default TaskItem;
