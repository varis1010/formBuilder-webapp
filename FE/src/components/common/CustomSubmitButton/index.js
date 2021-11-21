import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
import { styles } from "./styles";
const useStyles = makeStyles(styles);
const CustomSubmitButton = ({ children, ...props }) => {
    const classes = useStyles();
    if (props.isLoading) {
        children = (
            <><CircularProgress className="loadin-icon" />{children}</>
        )
    }
    return (<Button {...props} className={classes.root} disabled={props.disabled || props.isLoading}>{children}</Button>);
}

export default CustomSubmitButton;