import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";
const useStyles = makeStyles(styles);
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justify={"space-between"} alignItems="center">
        <Grid item className="leftCol">
          <span>Form Builder © 2020</span>
        </Grid>
        <Grid
          item
          alignItems="center"
          style={{ display: "flex" }}
          className="rightCol"
        >
          <Link>Terms</Link>
          <Link>Privacy</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
