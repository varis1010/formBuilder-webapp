import {
  AppBar,
  Avatar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { styles } from "./styles";

const useStyle = makeStyles(styles);

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.appbar}  elevation={0}>
      <Toolbar>
        <Typography className={classes.space}></Typography>
        <Avatar className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
