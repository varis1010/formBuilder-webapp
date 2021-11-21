import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CustomSubmitButton from "../../components/common/CustomSubmitButton";
import CustomTextField from "../../components/common/CustomTextField";
import { styles } from "./styles";
import AddQuestionDialog from "../../components/AddQuestionDialog";
import { createFormRequest } from "../../store/actions/formAction";

const useStyles = makeStyles(styles);

const CreateForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formName, setFormName] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const [openDialogue, setOpenDialogue] = useState(false);

  useEffect(() => {
    if (formName) {
      setError(false);
    }
  }, [formName]);

  const onHanlderSubmit = (e) => {
    e.preventDefault();
    if (!formName) {
      setError(true);
      setOpenDialogue(false);
    }
  };

  const addFormItem = (questionType, question, optionsValue) => {
    console.log("optionsValue", optionsValue);
    const optionArry = [];
    if (optionsValue) {
      optionsValue
        .split("\n")
        .map((item, idx) => optionArry.push({ value: idx, title: item }));
    }

    const formData = {
      formName,
      question,
      options: optionArry,
      questionType,
    };
    console.log("formData....", formData);
    dispatch(createFormRequest(formData));
    history.push("/");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid
            style={{ textAlign: "center", marginTop: "125px" }}
            item
            xs={12}
          >
            <form onSubmit={(e) => onHanlderSubmit(e)}>
              <Typography color="primary" variant="h4">
                Let's get started with FormBuilder..
              </Typography>
              <Grid
                style={{ justifyContent: "center", marginTop: "20px" }}
                container
                space={3}
                spacing={3}
              >
                <Grid item md={6} xs={6}>
                  <CustomTextField
                    label="Form Name"
                    placeholder="Enter your Form Name"
                    error={error}
                    helperText={error ? "Empty field!" : " "}
                    value={formName}
                    onChange={(e) => {
                      setFormName(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                style={{ justifyContent: "center", marginTop: "10px" }}
                container
                space={3}
                spacing={3}
              >
                <Grid item md={6} xs={6}>
                  <CustomSubmitButton
                    type="submit"
                    onClick={() => setOpenDialogue(true)}
                  >
                    {"Create Question Form"}
                  </CustomSubmitButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
      {openDialogue && (
        <AddQuestionDialog
          formName={formName}
          addFormItem={addFormItem}
          show={openDialogue}
          onClose={() => setOpenDialogue(false)}
        />
      )}
    </Grid>
  );
};

export default CreateForm;
