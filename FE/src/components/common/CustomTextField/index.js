import {  makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";

const useStyles = makeStyles(styles);
const CustomTextField = React.forwardRef(({ className, type, ...props }, ref) => {
  const classes = useStyles();
  const [stateType, setStateType] = useState('text');
  useEffect(() => {
    setStateType(type || 'text')
  }, [type])
  return (
      <TextField
        className={clsx(classes.root, className)}
        InputLabelProps={{ shrink: true }}
        {...props}
        variant="outlined"
        type={type}
        ref={ref}
      />
  );
});

export default CustomTextField;
