import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
  },
  primary: {
    main: "#000000",
  },
  typography: {
    fontFamily: ["Inconsolata", "sans-serif"].join(","),
  },
});

export default theme;
