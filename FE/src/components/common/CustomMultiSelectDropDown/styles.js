import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
    "margin-left": "0px"
  },
  root: {
    "&$checked": {
      color: "#e52d30"
    },
    
  },
  indeterminateColor: {
    color: "#e52d30"
  },
  selectAllText: {
    fontWeight: 500
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  checked: {}
}));

const ITEM_HEIGHT = 50;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      // width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  // variant: "menu"
};

export { useStyles, MenuProps };
