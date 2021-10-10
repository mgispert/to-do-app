import { render, screen, fireEvent } from "@testing-library/react";
import { TaskList } from ".";

describe("TaskList", () => {
  it("should render to do tasks", () => {
    render(<TaskList toDoTasks={["clean"]} />);
    const toDoTask = screen.getByText(/clean/i);
    expect(toDoTask).toBeInTheDocument();
  });
  it("should not render to do tasks if they are not provided", () => {
    render(<TaskList toDoTasks={[]} />);
    const toDoTask = screen.queryByText(/clean/i);
    expect(toDoTask).not.toBeInTheDocument();
  });
  it("should render done tasks", () => {
    render(<TaskList doneTasks={["clean"]} />);
    const doneTask = screen.getByText(/clean/i);
    expect(doneTask).toBeInTheDocument();
  });
  it("should not render done tasks if they are not provided", () => {
    render(<TaskList doneTasks={[]} />);
    const doneTask = screen.queryByText(/clean/i);
    expect(doneTask).not.toBeInTheDocument();
  });
  it("should call on click to do task when to do task is clicked", () => {
    const mockOnClickToDoTask = jest.fn();
    render(
      <TaskList toDoTasks={["clean"]} onClickToDoTask={mockOnClickToDoTask} />
    );
    const toDoTask = screen.getByText(/clean/i);
    fireEvent.click(toDoTask);
    expect(mockOnClickToDoTask).toBeCalledTimes(1);
    expect(mockOnClickToDoTask).toBeCalledWith("clean");
  });
  it("should render proper tasks when on to do tab", () => {
    render(<TaskList toDoTasks={["clean"]} />);
    const toDoTask = screen.getByText(/clean/i);
    expect(toDoTask).toBeInTheDocument();
    const doneTab = screen.getByText(/Done/i);
    fireEvent.click(doneTab);
    expect(toDoTask).not.toBeVisible();
  });
  it("should render proper tasks when on done tab", () => {
    render(<TaskList doneTasks={["clean"]} />);
    const doneTab = screen.getByText(/done/i);
    fireEvent.click(doneTab);
    const doneTask = screen.getByText(/clean/i);
    expect(doneTask).toBeVisible();
    const toDoTab = screen.getByText(/to do/i);
    fireEvent.click(toDoTab);
    expect(doneTask).not.toBeVisible();
  });
});
