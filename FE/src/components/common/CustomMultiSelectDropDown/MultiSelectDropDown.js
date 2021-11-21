import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles } from "./styles";

function MultiSelectDropDown(props) {
  const { label, options } = props;

  console.log("options", options);
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options === undefined &&
    options.length > 0 &&
    selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">{label}</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classes.selectedAll : "",
          }}
        ></MenuItem>
        {options.map((option, index) => (
          <MenuItem key={option._id} value={option.title}>
            <ListItemIcon>
              <Checkbox
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
                checked={selected.indexOf(option.title) > -1}
              />
            </ListItemIcon>
            <ListItemText primary={option.title} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MultiSelectDropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default MultiSelectDropDown;
