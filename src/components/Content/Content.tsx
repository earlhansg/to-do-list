import { Alert, Box } from "@mui/material";
import MenuTabs from "../MenuTabs/MenuTabs";
import TaskCard from "../TaskCard/TaskCard";

const tasks = [
    {
        id: 1,
        taskName: 'Buy Books',
        description: 'make sure the Author is Ryan Holidays',
        highPriority: false,
        status: 0
    },
    {
        id: 2,
        taskName: 'Feed the dog',
        description: 'need to shower them first',
        highPriority: true,
        status: 1
    },
    {
        id: 3,
        taskName: 'Assignment Physics',
        description: 'deadline nextweek',
        highPriority: true,
        status: 0
    }
]

const Content = () => {
  console.log("Content Component")
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px 10px 0 0",
        flex: 1,
      }}
      pl={5}
      pr={5}
      pt={3}
      pb={3}
    >
      <MenuTabs>
        {(menuTabId) => {
          const filteredTasks = tasks.filter((task) => task.status === menuTabId);

          return filteredTasks.length !== 0 ? (
            filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task}/>
            ))
          ) : (
            <Alert severity="info" sx={{ mt: 2 }}>
              At this point in time, there is no data added.
            </Alert>
          );
        }}
      </MenuTabs>
    </Box>
  );
};

export default Content;
