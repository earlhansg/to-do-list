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

type FormValues = {
  id?: number;
  taskName: string;
  description?: string;
  highPriority?: boolean;
  status: number;
}

const TaskModal = ({ isOpen, setIsOpen, actionType, toUpdateTask }: TaskModalProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      id: toUpdateTask ? toUpdateTask.id : 10,
      taskName: toUpdateTask ? toUpdateTask.taskName : '',
      description: toUpdateTask ? toUpdateTask.description : '',
      highPriority: toUpdateTask ? toUpdateTask.highPriority : false,
      status: toUpdateTask ? toUpdateTask.status : 0
    }
  });
  const {register, control } = form;

  const addTask = () => {
    console.log("Form Submitted", form.getValues())
  }

  return (
    <>
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
          {...register("taskName")}
        />
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
                  value={0}
                  label="Move"
                  // onChange={handleChange}
                  {...register("status")}
                >
                  <MenuItem value={0}>Pending</MenuItem>
                  <MenuItem value={1}>Completed</MenuItem>
                </Select>
              </>
            )}
            <FormControlLabel
              // value="start"
              control={
                <Checkbox
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
            onClick={addTask}
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
    </Modal>
    <DevTool control={control} />
    </>
  );
};

export default TaskModal;
