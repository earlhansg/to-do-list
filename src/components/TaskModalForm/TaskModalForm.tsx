import React from "react";
import { useForm } from "react-hook-form";
/* style */
import { TaskModalFormStyle } from "./TaskModalFormStyle";
/* materialUI */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
/* shared */
import { ActionType } from "../../shared/models/ActionType.model";
import { Action } from "../../shared/enums/Action.enum";
import { Task } from "../../shared/models/Task.model";
import { DevTool } from "@hookform/devtools";
/* store */
import { useTaskStore } from "../../shared/stores/TaskStore";

type TaskModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: ActionType;
  toUpdateTask: Task | null;
};

const TaskModalForm = ({
  isOpen,
  setIsOpen,
  actionType,
  toUpdateTask,
}: TaskModalProps) => {
  const { addTask, removeTask } = useTaskStore()
  const form = useForm<Task>({
    defaultValues: {
      id: toUpdateTask ? toUpdateTask.id : Math.floor(Math.random() * 100),
      taskName: toUpdateTask ? toUpdateTask.taskName : "",
      description: toUpdateTask ? toUpdateTask.description : "",
      highPriority: toUpdateTask ? toUpdateTask.highPriority : false,
      status: toUpdateTask ? toUpdateTask.status : 0,
    },
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit = (formData: Task) => {
    console.log("onSubmit", formData)
    addTask(formData)
    setIsOpen(false)
  };

  const handleDelete = () => {
    removeTask(form.getValues("id"))
    setIsOpen(false)
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={TaskModalFormStyle.contentContainer}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              sx={TaskModalFormStyle.headerText}
            >
              {actionType.action === Action.add ? "Add Task" : "Update Task"}
            </Typography>

            <TextField
              id="outlined-basic"
              placeholder="Name"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "10px",
                  marginTop: "1rem",
                },
              }}
              {...register("taskName", {
                required: "Taskname is required",
              })}
            />
            <Typography
              mt={1}
              component="p"
              sx={TaskModalFormStyle.errorMessage}
            >
              {errors.taskName?.message}
            </Typography>

            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Task description..."
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "10px",
                  marginTop: "0.5rem",
                },
              }}
              {...register("description")}
            />
            <Box sx={{ display: "flex", justifyContent: "end" }} mt={1} mb={1}>
              <FormControl fullWidth>
                {actionType.action !== Action.add && (
                  <>
                    <InputLabel id="demo-simple-select-label">Move</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={toUpdateTask ? form.getValues("status") : 0}
                      label="Move"
                      {...register("status")}
                    >
                      <MenuItem value={0}>Pending</MenuItem>
                      <MenuItem value={1}>Completed</MenuItem>
                    </Select>
                  </>
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={
                        toUpdateTask ? form.getValues("highPriority") : false
                      }
                      sx={{
                        "&.Mui-checked": {
                          color: "#4d5bbe",
                        },
                      }}
                      {...register("highPriority")}
                    />
                  }
                  label="High priority"
                  labelPlacement="start"
                />
              </FormControl>
            </Box>
            {actionType.action === Action.add ? (
              <Button
                variant="contained"
                sx={TaskModalFormStyle.addButton}
                type="submit"
              >
                Add Task
              </Button>
            ) : (
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  sx={TaskModalFormStyle.updateButton}
                  type="submit"
                >
                  Update Task
                </Button>
                <Button
                  variant="contained"
                  sx={TaskModalFormStyle.deleteButton}
                  onClick={handleDelete}
                >
                  Delete Task
                </Button>
              </Box>
            )}
          </Box>
        </form>
      </Modal>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default TaskModalForm;
