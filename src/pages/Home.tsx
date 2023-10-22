import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AddTaskForm from "../components/AddTask";
import TaskList from "../components/TaskList";
import DefaultLayout from "../layouts/Default";
import { AppDispatch } from "../store";
import { fetchTasks } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks(""));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <h1 className="text-2xl font-bol text-center">Todo List</h1>
      <AddTaskForm />
      <hr className="my-8" />
      <TaskList />
    </DefaultLayout>
  );
}
