import { Fab } from "@mui/material";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import TaskModal from "../TaskModal/TaskModal";

const ButtonWithDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <TaskModal isOpen={isOpen} setIsOpen={setIsOpen}/>}
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "absolute",
          bottom: 25,
          right: 35,
          backgroundColor: "#4d5bbe",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default ButtonWithDialog;
