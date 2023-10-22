import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import { AppDispatch } from "~/store";

const AddTaskForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() !== "") {
      dispatch(
        addTask({ title: title.trim(), description: description.trim() })
      );
      setTitle("");
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Add task title"
        className="w-full p-2 border rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add task description"
        className="w-full p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
