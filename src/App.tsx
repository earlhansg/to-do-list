import { useState } from "react";

import { Box, Card, CardContent, Tab, Tabs } from "@mui/material";

import Typography from "@mui/material/Typography";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import "./App.css";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", alignSelf: "baseline" }}
          ml={5}
          mb={3}
        >
          To-do list
        </Typography>
      </Box>
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
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
          TabIndicatorProps={{
            style: { backgroundColor: "#4d5bbe" },
          }}
          aria-label="basic tabs example"
        >
          <Tab label="All tasks" {...a11yProps(0)} />
          <Tab label="Done" {...a11yProps(1)} />
        </Tabs>
        <Card sx={{ marginTop: "1.5rem"}}>
          <CardContent sx={{}}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ marginRight: "auto" }}
                // color="text.secondary"
                variant="h5"
                gutterBottom
              >
                Buy Paper
              </Typography>

              <PriorityHighIcon sx={{ color: "#D04848", fontSize: "2.5rem" }} />
            </Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              with pencil and everything
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
