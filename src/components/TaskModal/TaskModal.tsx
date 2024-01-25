import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type TaskModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskModal = ({ isOpen, setIsOpen }: TaskModalProps) => {
  return (
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
          Add task
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
              marginTop: "1rem",
            },
          }}
        />
        <Box sx={{display: "flex", justifyContent: "end"}} mt={1} mb={1}>
          <FormControlLabel
            // value="start"
            control={
            <Checkbox sx={{
              '&.Mui-checked': {
                color: "#4d5bbe",
              },
            }}/>
            }
            label="High priority"
            labelPlacement="start"
          />
        </Box>
        <Button variant="contained" sx={{
          width: "100%",
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: "#4d5bbe"
        }}>Add Task</Button>
      </Box>
    </Modal>
  );
};

export default TaskModal;
