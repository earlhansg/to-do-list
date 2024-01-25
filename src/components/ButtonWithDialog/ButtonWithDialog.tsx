import { Fab } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import TaskModal from "../TaskModal/TaskModal";
import { ActionType } from "../../shared/models/ActionType.model";
import { Action } from "../../shared/enums/Action.enum";
import { Task } from "../../shared/models/Task.model";

export type ButtonWithDialogMethods = {
    updateTask: (task: Task) => void;
}

const ButtonWithDialog: React.ForwardRefRenderFunction<ButtonWithDialogMethods, any> = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<ActionType>({action: "ADD"});
  const [task, setTask] = useState<Task | null>(null)

  const updateTask = (task: Task) => {
    // console.log('Method called in child component', task);
    setTask(task);
    setIsOpen(true);
    setActionType({action: Action.update})
  };

  useImperativeHandle(ref, () => ({
    updateTask
  }));

  return (
    <>
      {isOpen && <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} 
      actionType={actionType} toUpdateTask={task}/>}
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
          setIsOpen(true)
          setActionType({action: Action.add})
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

// export default ButtonWithDialog;

export const ForwardedButtonWithDialog = forwardRef(ButtonWithDialog);

