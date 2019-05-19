import React, { useEffect, useState } from "react";
import { MenuItem, Paper, TextField, withStyles } from "@material-ui/core";
import FormCTA from "./components/FormCTA";
import FormA from "./FormA";
import FormB from "./FormB";
import { styles } from "./UI";

//---------------------------------------------------------CONSTANTS----------------------------------------------------------------

const TARGET_RESIDUE_TYPE = [
  { value: "api", label: "API" },
  { value: "agent", label: "Cleaning Agent" },
  { value: "bio", label: "Bioburden" },
  { value: "endo", label: "Endotoxin" }
];

//-----------------------------------------------------------REACT FC---------------------------------------------------------------

const App = props => {
  /* Hooks State */

  const [residueType, changeResidueType] = useState("api");
  const [subFormType, changeSubFormType] = useState("A");

  /* CRUD Functions */

  const handleResidueChange = e => {
    changeResidueType(e.target.value);
  };

  useEffect(() => {
    if (residueType) {
      if (residueType === "api" || residueType === "agent") {
        changeSubFormType("A");
      } else {
        changeSubFormType("B");
      }
    } else {
      changeSubFormType(null);
    }
  }, [residueType]);
  const { classes } = props;
  return (
    <div style={{ width: "100%" }}>
      <div className="d-f">
        <div
          style={{
            width: "20%",
            backgroundColor: "rgb(63, 176, 202)",
            height: "100vh",
            position: "fixed"
          }}
        />
        <div className={classes.root}>
          <Paper>
            <div className={classes.formContainer}>
              <TextField
                variant="outlined"
                fullWidth={true}
                label="Analytical Method ID"
                InputLabelProps={{ shrink: true }}
                required
              />
              <div className="spacer" />
              <TextField
                variant="outlined"
                fullWidth={true}
                label="Target Residue Type"
                InputLabelProps={{ shrink: true }}
                required
                select
                value={residueType}
                onChange={handleResidueChange}
              >
                {TARGET_RESIDUE_TYPE.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <div className="spacer" />
              {subFormType ? subFormType === "A" ? <FormA /> : <FormB /> : null}
            </div>
          </Paper>
        </div>
      </div>
      <FormCTA />
    </div>
  );
};

export default withStyles(styles)(App);
