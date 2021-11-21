export const styles = (theme) => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "10px",
      backgroundColor: "#d6dbf9",
    },
    "& .MuiDialogContent-root": {
      width: "520px",
      maxWidth: "100%",
      minHeight: "30vh",
      paddingBottom: "40px",
      "& p": {
        fontSize: "18px",
      },
      "& .MuiFormControl-root": {
        backgroundColor: "white",
        borderRadius: "10px",
      },
    },
    "& .MuiDialogTitle-root": {
      "& .close-btn": {
        display: "inline-block",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        right: "5px",
      },
    },
  },
});
