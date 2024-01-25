import React, { forwardRef, useImperativeHandle, useState } from "react";
/* style */
import { ButtonWithDialogStyle } from "./ButtonWithDialogStyle";
/* materialUI */
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
/* components */
import TaskModal from "../TaskModalForm/TaskModalForm";
/* shared */
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
        sx={ButtonWithDialogStyle.fabIcon}
        onClick={() => {
          setTask(null);
          setIsOpen(true)
          setActionType({action: Action.add})
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export const ForwardedButtonWithDialog = forwardRef(ButtonWithDialog);

