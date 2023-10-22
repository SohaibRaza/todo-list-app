import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <ul className="mt-4 pb-10">
        {tasks.map((task: TaskItem) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
