import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "~/store";
import Input from "./Input";
import { updateTask } from "../store/actions";

interface EditTaskProps {
  task: TaskItem;
  onSave: (task: TaskItem) => void;
  onCancel: () => void;
}

const EditTask = ({ task, onSave, onCancel }: EditTaskProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    onCancel();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70">
      <div className="bg-white max-w-xl w-full p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <Input
          type="text"
          value={editedTask.title}
          onChange={(e) =>
            setEditedTask((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <textarea
          name="description"
          id="edit-description"
          rows={3}
          placeholder="Description"
          className="w-full p-2 border rounded mb-4"
        ></textarea>
        <select
          value={editedTask.status}
          className="w-full p-2 border rounded mb-4"
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              status: e.target.value as TaskStatus,
            })
          }
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className="flex justify-end">
          <button
            className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
