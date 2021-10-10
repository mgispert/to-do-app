import {
  List,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export const TaskList = (props) => {
  return (
    <Tabs data-testid="taskList">
      <TabList>
        <Tab>To Do</Tab>
        <Tab>Done</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={3}>
            {props.toDoTasks &&
              props.toDoTasks.map((value, index) => (
                <ListItem
                  key={index}
                  onClick={() => props.onClickToDoTask(value)}
                >
                  {value}
                </ListItem>
              ))}
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={3}>
            {props.doneTasks &&
              props.doneTasks.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
              ))}
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
