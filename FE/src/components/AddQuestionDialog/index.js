import { FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import CustomFormDialog from "../common/CustomFormDialog";
import CustomSubmitButton from "../common/CustomSubmitButton";
import CustomTextField from "../common/CustomTextField";
import CustomDropDown from "../common/CustomDropDown";
import CustomMenuItem from "../common/CustomDropDown/CustomMenuItem";

const AddQuestionDialog = ({ onClose, formName, addFormItem, show }) => {
  const [questionType, setQuestionType] = useState("");
  const [question, setQuestion] = useState("");
  const [radioChoice, setRadioChoice] = useState("");
  const [multichoiceOptions, setmultichoiceOptions] = useState("");

  return (
    <>
      <CustomFormDialog open={show} onClose={onClose} title={formName}>
        <Grid container space={3} spacing={3}>
          <Grid item md={12} xs={12} >
            <CustomTextField
              label="Question"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}  >
            <CustomDropDown
              label="Answer Type"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
            >
              <CustomMenuItem value="multiple-choice-multi-select">
                Multiple Choice Single Select
              </CustomMenuItem>
              <CustomMenuItem value="boolean">Single Select Answer</CustomMenuItem>
              <CustomMenuItem value="free-text">Text Box</CustomMenuItem>
            </CustomDropDown>
          </Grid>

          {questionType === "multiple-choice-multi-select" && (
            <Grid item md={12} xs={12} >
              <CustomTextField
                multiline
                rows={4}
                label="Add Options"
                placeholder="Please Enter MultiChoice Values each in separate lines...."
                value={multichoiceOptions}
                onChange={(e) => setmultichoiceOptions(e.target.value)}
              />
            </Grid>
          )}

          {questionType === "boolean" && (
            <Grid item md={12} xs={12}>
              <label style={{ fontWeight: "bold" }}>Single Select Answer</label>
              <RadioGroup
                aria-label="radio"
                name="row-radio-buttons-group"
                value={radioChoice}
                onChange={(e) => setRadioChoice(e.target.value)}
                row
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </RadioGroup>
            </Grid>
          )}

          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px 0px 0px 0px",
              justifyContent: "flex-end",
            }}
            item
            xs={12}
          >
            <Grid item>
              <CustomSubmitButton
                onClick={() =>
                  addFormItem(
                    questionType,
                    question,
                    multichoiceOptions,
                  )
                }
              >
                {"Add"}
              </CustomSubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </CustomFormDialog>
    </>
  );
};

export default AddQuestionDialog;
