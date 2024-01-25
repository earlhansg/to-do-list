import { Box, Card, CardContent, Typography } from "@mui/material";

import PanToolIcon from '@mui/icons-material/PanTool';
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
            <PanToolIcon sx={{ color: "#f4cc0c", fontSize: "2.5rem" }} />
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
