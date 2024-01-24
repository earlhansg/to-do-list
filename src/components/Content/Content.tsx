import { Box } from "@mui/material";
import MenuTabs from "../MenuTabs/MenuTabs";
import TaskCard from "../TaskCard/TaskCard";

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
      <TaskCard />
    </Box>
  );
};

export default Content;
