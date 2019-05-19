import React from "react";
import { withStyles, Button } from "@material-ui/core";
import { styles } from "../UI";

const FormCTA = ({ classes }) => {
  return (
    <div className={classes.ctaWrapper}>
      <Button variant="outlined" color="primary">
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        Update
      </Button>
    </div>
  );
};

export default withStyles(styles)(FormCTA);
