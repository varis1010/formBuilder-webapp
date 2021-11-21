import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Link,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/common/Loader";
import { styles } from "./style";
import { getForm } from "../../store/actions/formAction";
import { useParams } from "react-router";
import CustomTextField from "../../components/common/CustomTextField";
import CustomSubmitButton from "../../components/common/CustomSubmitButton";
import CustomDropDown from "../../components/common/CustomDropDown";
import CustomMenuItem from "../../components/common/CustomDropDown/CustomMenuItem";
import MultiSelectDropDown from "../../components/common/CustomMultiSelectDropDown/MultiSelectDropDown";

const useStyle = makeStyles(styles);
const PreviewForm = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [radioChoice, setRadioChoice] = useState("yes");
  const [loading, setLoading] = useState(true);

  const { form } = useSelector((state) => state?.form);

  useEffect(() => {
    let timeId = setTimeout(() => {
      dispatch(getForm(id));
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeId);
    };
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {loading ? (
          <Loader />
        ) : (
          <Paper className={classes.paper}>
            <Grid style={{ textAlign: "left" }} item xs={12}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  style={{ textTransform: "capitalize" }}
                  color="primary"
                  component="p"
                >
                  {form.formName}
                </Typography>
              </Grid>
              <Typography
                style={{
                  justifyContent: "left",
                  textTransform: "capitalize",
                  marginTop: "15px",
                }}
                spacing={3}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Q. {form.question}
              </Typography>

              {form.questionType === "free-text" && (
                <Grid
                  style={{ justifyContent: "left", marginTop: "10px" }}
                  item
                  md={6}
                  xs={6}
                >
                  <CustomTextField
                    label="Answer"
                    placeholder="Enter your Answer"
                    value=""
                    onChange={(e) => {}}
                    disabled
                  />
                </Grid>
              )}

              {form.questionType === "multiple-choice-multi-select" && (
                <Grid
                  style={{ justifyContent: "left", marginTop: "10px" }}
                  item
                  md={6}
                  xs={6}
                >
                  <CustomDropDown
                    label="Question Type"
                    value={form.questionType}
                    // onChange={(e) => setQuestionType(e.target.value)}
                  >
                    <CustomMenuItem
                      disabled
                      value="multiple-choice-multi-select"
                    >
                      Multiple Choice Single Select
                    </CustomMenuItem>
                    <CustomMenuItem disabled value="boolean">
                      Yes / No
                    </CustomMenuItem>
                    <CustomMenuItem disabled value="free-text">
                      Free Text
                    </CustomMenuItem>
                  </CustomDropDown>
                </Grid>
              )}

              {form.questionType === "multiple-choice-multi-select" && (
                <MultiSelectDropDown
                  label="Multiple Choice Answer"
                  options={form.options}
                />
              )}

              {form.questionType === "boolean" && (
                <Grid
                  style={{ justifyContent: "left", marginTop: "10px" }}
                  item
                  md={6}
                  xs={6}
                >
                  <label style={{ fontWeight: "bold" }}>Answer</label>
                  <RadioGroup
                    aria-label="radio"
                    name="row-radio-buttons-group"
                    value={radioChoice}
                    onChange={(e) => setRadioChoice(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      disabled
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      disabled
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </Grid>
              )}

              <Grid
                style={{ justifyContent: "left", marginTop: "10px" }}
                container
                space={3}
                spacing={3}
              >
                <Grid item md={6} xs={6}>
                  <CustomSubmitButton disabled type="submit">
                    {"Add Questions"}
                  </CustomSubmitButton>
                </Grid>
              </Grid>

              <Grid
                style={{ justifyContent: "center", marginTop: "130px" }}
                container
                space={3}
                spacing={3}
              >
                <Typography
                  style={{
                    justifyContent: "left",
                    textTransform: "capitalize",
                    marginTop: "15px",
                  }}
                  spacing={3}
                  variant="h6"
                  color="secondary"
                  component="caption"
                >
                  This is only Preview of the page that you've created. Please
                  use blow link for access Form.
                </Typography>
                <Grid style={{ textAlign: "center" }} item md={6} xs={6}>
                  <Link
                    style={{ fontSize: "20px" }}
                    href={form.formUrl}
                    target="_blank"
                  >
                    Access Form
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default PreviewForm;
