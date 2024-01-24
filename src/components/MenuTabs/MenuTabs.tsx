import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
};

const MenuTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
  );
};

export default MenuTabs;
