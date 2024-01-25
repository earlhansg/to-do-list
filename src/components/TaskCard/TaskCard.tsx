import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

import PanToolIcon from '@mui/icons-material/PanTool';
import { Task } from "../../shared/models/Task.model";


type TaskCardProps = {
  task: Task
  updateTask: () => void
}

const TaskCard = ({task, updateTask} : TaskCardProps) => {
  console.log("TaskCard Component")
  return (
    <Card sx={{ marginTop: "1.5rem", ":hover": "red"}} onClick={updateTask}>
      <CardActionArea>
        <CardContent sx={{}}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "auto" }} variant="h5" gutterBottom>
              {task.taskName}
            </Typography>
            {task.highPriority && (
              <PanToolIcon sx={{ color: "#f4cc0c", fontSize: "2.5rem" }} />
            )}
          </Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {task.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
