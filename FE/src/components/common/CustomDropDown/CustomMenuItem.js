import { makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import { styles } from "./styles";
const useStyles = makeStyles(styles);
const CustomMenuItem = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <MenuItem {...props} className={classes.menuItem} ref={ref}>{props.children}</MenuItem>
    );
})
export default CustomMenuItem;