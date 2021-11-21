export const styles = (theme) => ({
  root: {
    width: 250,
    maxHeight: 300,
    margin: "10px",
    wordWrap: "break-word",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "& :hover" : {
      cursor: 'pointer',
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "480px",
    justifyContent: "center",
  },
});
