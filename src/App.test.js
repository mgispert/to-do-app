import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  const selectAndChangeInput = () => {
    const input = screen.getByPlaceholderText(/add your task here/i);
    fireEvent.change(input, { target: { value: "clean" } });
  };

  const selectAndClickButton = () => {
    const button = screen.getByText(/add task/i);
    fireEvent.click(button);
  };

  const selectToDoVisibleTask = (shouldBeClicked) => {
    const toDoTask = screen.getByText(/clean/i);
    expect(toDoTask).toBeVisible();
    shouldBeClicked && fireEvent.click(toDoTask);
  };

  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("should add a to do task and render it to the list", () => {
    render(<App />);
    selectAndChangeInput();
    selectAndClickButton();
    selectToDoVisibleTask(false);
  });
  it("should move a to do task towards done task list when clicked", () => {
    render(<App />);
    selectAndChangeInput();
    selectAndClickButton();
    selectToDoVisibleTask(true);
    expect(screen.getByText(/clean/i)).not.toBeVisible();
    const doneTab = screen.getByText(/done/i);
    fireEvent.click(doneTab);
    selectToDoVisibleTask(false);
  });
});
