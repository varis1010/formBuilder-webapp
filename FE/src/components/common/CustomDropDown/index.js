import { FormControl, FormHelperText, InputLabel, makeStyles, OutlinedInput, Select } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { styles } from "./styles";
const useStyles = makeStyles(styles);
const CustomDropDown = ({ className, ...props }) => {
  const classes = useStyles(props);
  return (
    <FormControl
      variant="outlined"
      className={clsx(classes.root, className)}
    >
      <InputLabel id={`select-outlined-label-${props.label}`} shrink={props.shrink}>
        {props.label}
      </InputLabel>
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        IconComponent={ExpandMore}
        {...props}
        labelId={`select-outlined-label-${props.label}`}
        input={<OutlinedInput notched={props.shrink} label={props.label} />}
      >
        {props.children}
      </Select>
      {props.helperText &&
        <FormHelperText>{props.helperText}</FormHelperText>
      }
    </FormControl>
  );
};

export default CustomDropDown;
