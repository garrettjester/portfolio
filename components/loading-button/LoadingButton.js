import { CircularProgress } from "node_modules/@material-ui/core/index";
import React from "react";
import Button from "components/button/Button";
import Check from "components/icons/Check";
import Fade from "react-reveal/Fade";

const LoadingButton = (props) => {
  const { classes, loading, success, ...other } = props;

  if (success) {
    return (
      <Button style={{width: '100%', height: '45px', display: 'flex', alignContent: 'center', justifyContent: 'center'}} {...other} disabled={true}>
        <Fade bottom>
          <Check />
        </Fade>
      </Button>
    );
  }
  else if (loading) {
    return (
      <Button style={{width: '100%', height: '45px', alignItems: 'center', justifyContent: 'center'}} {...other}>
        <CircularProgress size={18} color="#FFF" disabled={true} />
      </Button>
    );
  } else {
    return (
      <Button style={{width: '100%', height: '45px'}} {...other} htmlType="submit"/>
    );
  }
}

export default LoadingButton;