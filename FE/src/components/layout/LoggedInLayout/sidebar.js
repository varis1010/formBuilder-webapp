import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { styles } from "./styles";
import { useHistory, useLocation } from "react-router-dom";
const useStyles = makeStyles(styles);

const MENU = [
  {
    text: "Dashboard",
    icon: <SubjectOutlined color={"primary"} />,
    path: "/",
  },
  {
    text: "Create Form",
    icon: <AddCircleOutlineOutlined color={"primary"} />,
    path: "/create-form",
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography
          variant="h5"
          onClick={() => history.push("/")}
          className={classes.title}
        >
          FormBuilder
        </Typography>
      </div>

      <List>
        {MENU.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
