import { Box, Card, CardContent, Typography } from "@mui/material";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const TaskCard = () => {
  return (
    <Card sx={{ marginTop: "1.5rem" }}>
      <CardContent sx={{}}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ marginRight: "auto" }} variant="h5" gutterBottom>
            Buy Paper
          </Typography>

          <PriorityHighIcon sx={{ color: "#D04848", fontSize: "2.5rem" }} />
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          with pencil and everything
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
