import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Calibri",
    color: "#3c4f69"
  },
  palette: {
    primary: {
      main: "#535353",
      background: "#6fcf97",
      borderRadius: "10px",
      padding: "15px",
      color: "#FFFFFF",
      paddingLeft: 40,
      paddingRight: 40,
      marginTop: 2,
      marginBottom: 2,
      "&:hover": {
        background: "#6fcf97",
      },
    },
    background: {
      main: "#f0fcff",
      menuHover: "#CAECF4",
      buttonBackgroundDark: "#69798f"
    },
    icons: {
      main: "#59bad1",
      hover: "#3c4f69",
    },
    text: {
      // mainLableBold: "#3c4f69",
      white: "#fff"
    },
    input: {
      borderMain: "#c3cdda",
      textMain: "#3c4f69",
      labelMain: "#69798f"
    },
    table: {
      headBackground: "#3c4f69",
      evenRow: "#f7f7f7",
      textMain: "#3c4f69",
      rowHover: "#f0fcff"
    },
    modal: {
      headerBackgroundColor: "#3c4f69",
      headerColor: "white"
    }
  },
});

export default theme;
