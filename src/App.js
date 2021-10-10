import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { TaskBar } from "./components/TaskBar";
import { TaskList } from "./components/TaskList";

export const App = () => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleOnAddTask = (valueInput) =>
    setToDoTasks((oldToDoTasks) => [valueInput, ...oldToDoTasks]);

  const handleOnClickToDoTask = (taskToMove) => {
    const excludeDoneTaskFromToDoTasks = toDoTasks.filter(
      (toDoTask) => toDoTask !== taskToMove
    );
    setToDoTasks(excludeDoneTaskFromToDoTasks);
    setDoneTasks((oldDoneTasks) => [taskToMove, ...oldDoneTasks]);
  };

  return (
    <ChakraProvider>
      <h1>To Do App</h1>
      <TaskBar onAddTask={handleOnAddTask} />
      <TaskList
        toDoTasks={toDoTasks}
        doneTasks={doneTasks}
        onClickToDoTask={handleOnClickToDoTask}
      />
    </ChakraProvider>
  );
};
