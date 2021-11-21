import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import CustomSubmitButton from "../CustomSubmitButton";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const CommonBasePage = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid style={{ textAlign: "center", marginTop: "125px" }} item xs={12}>
          <Typography color="primary" variant="h4">
            No, Question's Forms are Added Yet! Please add a Form
          </Typography>
          <Grid
            style={{ justifyContent: "center", marginTop: "10px" }}
            container
            space={3}
            spacing={3}
          >
            <Grid item md={6} xs={6}>
              <CustomSubmitButton
                type="submit"
                onClick={() => history.push("./create-form")}
              >
                {"Add Question Form"}
              </CustomSubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CommonBasePage;
