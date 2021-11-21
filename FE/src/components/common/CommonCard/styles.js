export const styles = (theme) => ({
  root: {
    width: 250,
    maxHeight: 300,
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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "480px",
    justifyContent: "center",
  },
});
