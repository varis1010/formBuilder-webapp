export const styles = (theme) => ({
  root: {
      width: "100%",
      "& label": {
          color: `#3c4f69`,
          transform: "translate(14px, 18px) scale(1)"
      },
      "& input": {
          padding: "17px 20px",
          color: "#3c4f69",
          fontSize: "15px",
          fontSize: "15px",
          fontWeight: "600",
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
              appearance: "none",
              margin: "0"
          }

      },
      "& fieldset, &:hover fieldset": {
          borderRadius: "10px",
          borderColor: `#c3cdda`
      },
      "& .showhidebtn": {
          padding: "0",
          "&:hover": {
              backgroundColor: "unset"
          },
          "& svg": {
              fontSize: "22px",
              color: "#c3cdda"
          }
      }
  }
});