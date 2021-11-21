export const styles = (theme) => ({
    root: {
        padding: "14px 34px",
        borderRadius: "10px",
        lineHeight: 1.19,
        backgroundColor: "#3d4c9f",
        fontSize: "16px",
        fontWeight: "600",
        color: "white !important",
        textTransform: "none",
        boxShadow: "0px 8px 10px -1px rgba(111,207,151,0.65)",
        transition: "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        "& .loadin-icon": {
            height: "20px !important",
            width: "20px !important",
            marginRight: "10px",
            color: "white",
        },
        "& .MuiSvgIcon-root": {
            marginRight: "10px"
        },
        "&:hover": {
            backgroundColor: "#6878d3",
            color: "white",
            transform: "translate(0px, -2px)"
        }
    }
});