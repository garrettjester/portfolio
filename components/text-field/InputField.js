import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
  },
})(TextField);

export default InputField;
