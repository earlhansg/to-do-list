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
import React from "react";
import { ActionType } from "../../shared/models/ActionType.model";
import { Action } from "../../shared/enums/Action.enum";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { Task } from "../../shared/models/Task.model";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

type TaskModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: ActionType;
  toUpdateTask: Task | null;
};

export type FormValues = {
  id?: number;
  taskName: string;
  description?: string;
  highPriority?: boolean;
  status: number;
}

const TaskModalForm = ({ isOpen, setIsOpen, actionType, toUpdateTask }: TaskModalProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      id: toUpdateTask ? toUpdateTask.id : 10,
      taskName: toUpdateTask ? toUpdateTask.taskName : '',
      description: toUpdateTask ? toUpdateTask.description : '',
      highPriority: toUpdateTask ? toUpdateTask.highPriority : false,
      status: toUpdateTask ? toUpdateTask.status : 0
    }
  });
  const {register, control, formState, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit = (formData: FormValues) => {
    console.log("formData", formData)
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
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          fontWeight={"500"}
          textAlign={"center"}
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
            required: "Taskname is required"
          })}
        />
            <Typography mt={1} component="p" sx={{color:"#BF3131", fontSize: "14px", fontWeight: "500"}}>
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
                  defaultChecked={toUpdateTask ? form.getValues("highPriority") : false}
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
            sx={{
              width: "100%",
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "#4d5bbe",
            }}
            type="submit"
          >
            Add Task
          </Button>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: "#4d5bbe",
              }}
              type="submit"
            >
              Update Task
            </Button>
            <Button
              variant="contained"
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: "#BF3131",
              }}
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
