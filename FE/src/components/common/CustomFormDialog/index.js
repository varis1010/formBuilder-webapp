import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import React from "react";
import { styles } from "./styles";
const useStyles = makeStyles(styles);
const CustomFormDialog = ({ title, children, onClose, ...rest }) => {
  const classes = useStyles();
  return (
    <Dialog {...rest} maxWidth={false} className={classes.root}>
      <DialogTitle>
        {title}

        <IconButton className="close-btn" onClick={onClose}>
          <HighlightOff />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomFormDialog;
