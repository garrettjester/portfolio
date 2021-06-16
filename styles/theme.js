import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
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
