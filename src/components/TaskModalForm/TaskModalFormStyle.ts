export const TaskModalFormStyle = {
  contentContainer: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  },
  headerText: {
    fontWeight: "500",
    textAlign: "center",
  },
  errorMessage: {
    color: "#BF3131",
    fontSize: "14px",
    fontWeight: "500",
  },
  addButton: {
    width: "100%",
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#4d5bbe",
  },
  updateButton: {
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#4d5bbe",
  },
  deleteButton:{
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#BF3131",
  }
};
