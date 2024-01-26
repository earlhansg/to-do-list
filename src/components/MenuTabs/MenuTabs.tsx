import React, { ReactNode, useState } from "react";
/* materialUI */
import { Chip, Tab, Tabs, Typography } from "@mui/material";
/* store */
import { useTaskStore } from "../../shared/stores/TaskStore";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export type MenuTabsProps = {
  children: (value: number) => ReactNode;
};

const MenuTabs = ({ children }: MenuTabsProps) => {
  const [value, setValue] = useState(0);
  const { tasks } = useTaskStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
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
        <Tab
          label={
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "15px",
              }}
            >
              All tasks
              <Chip
                label={tasks.filter((task) => task.status === 0).length}
                size="small"
                sx={{ marginLeft: "7px" }}
              />
            </Typography>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "15px",
              }}
            >
              All tasks
              <Chip
                label={tasks.filter((task) => task.status === 1).length}
                size="small"
                sx={{ marginLeft: "7px" }}
              />
            </Typography>
          }
          {...a11yProps(1)}
        />
      </Tabs>
      {children(value)}
    </>
  );
};

export default MenuTabs;
