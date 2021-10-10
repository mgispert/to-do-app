import { FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { StyledButton } from "./styles";

export const TaskBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form id="text" onSubmit={handleSubmit} data-testid="taskBar">
      <FormLabel>Write a task to add!</FormLabel>
      <Input
        type="text"
        value={inputValue}
        placeholder={"Add your task here"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <StyledButton type="submit">Add Task</StyledButton>
    </form>
  );
};
