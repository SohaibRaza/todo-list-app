/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AddTaskForm from "./AddTask";
import rootReducer from "../store/reducers";

describe("AddTaskForm", () => {
  const store = createStore(rootReducer);

  it("renders the component", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <AddTaskForm />
      </Provider>
    );

    const titleInput = getByPlaceholderText("Add task title");
    const descriptionInput = getByPlaceholderText("Add task description");
    const addButton = getByText("Add Task");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("handles input changes", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddTaskForm />
      </Provider>
    );

    const titleInput = getByPlaceholderText("Add task title");
    const descriptionInput = getByPlaceholderText("Add task description");

    fireEvent.change(titleInput, { target: { value: "New Task Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Task Description" },
    });

    expect(titleInput).toHaveValue("New Task Title");
    expect(descriptionInput).toHaveValue("Task Description");
  });

  it("dispatches addTask action on button click", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AddTaskForm />
      </Provider>
    );

    const addButton = getByText("Add Task");

    fireEvent.click(addButton);
  });
});
