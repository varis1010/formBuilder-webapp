const drawerWidth = 240;

export const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  page: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#f0f0f0",
  },
  contentContainer: {
    padding: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fbfbfb",
  },
  active: {
    background: "#d6dbf9",
  },
  title: {
    padding: "12px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "#3d4c9f",
  },
  toolbar: theme.mixins.toolbar,
  space: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  footer: {
    padding: "0px 20px 20px",
    fontSize: "14px",
    color: "#fff",
    "& .avon": {
      color: "#96a3b4",
      fontSize: "15px",
      fontWeight: "600",
      marginLeft: "12px",
    },
    "& .leftCol": {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: "10px",
        color: "#96a3b4",
      },
    },
    "& .rightCol": {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: "10px",
        flexDirection: "column",
        color: "#96a3b4",
        "& a": {
          display: "block",
          marginTop: "10px",
          padding: "0",
        },
      },
    },
    "& a": {
      display: "inline-block",
      color: "#96a3b4",
      cursor: "pointer",
      textDecoration: "none",
      paddingLeft: "10px",
      paddingRight: "10px",
      "& img": {
        display: "block",
      },
      "&:first-child": {
        paddingLeft: "0px",
      },
      "&:last-child": {
        paddingRight: "0px",
      },
    },
  },
});
