export const styles = (theme) => ({
    root: {
        width: "100%",
        "& label": {
            fontFamily: "Work Sans",
            color: `${theme.palette.input.labelMain} !important`,
            transform: "translate(14px, 18px) scale(1)"
        },
        "& .MuiSelect-select": {
            padding: "17px 20px",
            color: theme.palette.input.textMain,
            fontSize: "15px",
            fontWeight: "600"
        },
        "& .MuiSelect-select:focus": {
            backgroundColor: "unset"
        },
        "& fieldset, &:hover fieldset": {
            borderRadius: "10px",
            borderColor: `${theme.palette.input.borderMain} !important`,
        },
        "& legend": (props) => ({
            color: "black"
        })
    },
    menuItem: {
        fontFamily: "Work Sans",
        color: theme.palette.input.textMain,
        fontSize: "15px",
        fontWeight: "500"
    }
});