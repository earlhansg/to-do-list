import { Box, Card, CardContent, Typography } from "@mui/material";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Task } from "../../shared/models/Task.model";


type TaskCardProps = {
    task: Task
}

const TaskCard = ({task} : TaskCardProps) => {
  console.log("TaskCard Component")
  return (
    <Card sx={{ marginTop: "1.5rem"}}>
      <CardContent sx={{}}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ marginRight: "auto" }} variant="h5" gutterBottom>
            {task.taskName}
          </Typography>
          {task.highPriority && (
            <PriorityHighIcon sx={{ color: "#D04848", fontSize: "2.5rem" }} />
          )}
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
