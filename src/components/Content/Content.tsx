import { useRef } from "react";
/* style */
import { ContentStyle } from "./ContentStyle";
/* materialUI */
import { Alert, Box } from "@mui/material";
/* components */
import MenuTabs from "../MenuTabs/MenuTabs";
import TaskCard from "../TaskCard/TaskCard";
import { ButtonWithDialogMethods, ForwardedButtonWithDialog } from "../ButtonWithDialog/ButtonWithDialog";
/* shared */
import { Task } from "../../shared/models/Task.model";
/* store */
import { useStore } from "../../store";

const Content = () => {
  const tasks = useStore((store) => store.task)
  const buttonWithDialogRef = useRef<ButtonWithDialogMethods>(null);

  const handleButtonClick = (task: Task) => {
    // Access the method in the child component using the ref
    if (buttonWithDialogRef.current) {
      buttonWithDialogRef.current.updateTask(task)
    }
  };
  return (
    <Box
      sx={ContentStyle.container}
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
              <TaskCard key={task.id} task={task} updateTask={() => handleButtonClick(task)}/>
            ))
          ) : (
            <Alert severity="info" sx={{ mt: 2 }}>
              At this point in time, there is no data added.
            </Alert>
          );
        }}
      </MenuTabs>
      <ForwardedButtonWithDialog ref={buttonWithDialogRef}/>
    </Box>
  );
};

export default Content;
