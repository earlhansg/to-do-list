import { Box, Typography } from "@mui/material";
import MenuTabs from "../MenuTabs/MenuTabs";
import TaskCard from "../TaskCard/TaskCard";

const tasks = [
    {
        id: 1,
        taskName: 'Buy Books',
        description: 'make sure the Author is Ryan Holidays',
        highPriority: false
    },
    {
        id: 2,
        taskName: 'Feed the dog',
        description: 'need to shower them first',
        highPriority: true
    }
]

const Content = () => {
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
      <MenuTabs />
      {tasks.length !== 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <Typography sx={{ marginRight: "auto" }} variant="h5" />
      )}
    </Box>
  );
};

export default Content;
