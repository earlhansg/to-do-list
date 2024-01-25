import { Tab, Tabs } from "@mui/material";
import React, { ReactNode, useState } from "react";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export type MenuTabsProps = {
    children: (value: number) => ReactNode;
}

const MenuTabs = ({children} : MenuTabsProps) => {
  console.log("MenuTabs Component")
  const [value, setValue] = useState(0);

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
        <Tab label="All tasks" {...a11yProps(0)} />
        <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
        {children(value)}
    </>
  );
};

export default MenuTabs;
