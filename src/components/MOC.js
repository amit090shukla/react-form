import React from "react";
import { TextField, Button } from "@material-ui/core";

const MOC = ({ moc, removeMOC, sample }) => {
  return (
    <>
      <TextField
        variant="outlined"
        label="Select MOC"
        InputLabelProps={{ shrink: true }}
        required
        style={{ marginRight: "8px" }}
      />
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Recovery %"
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button
        variant="text"
        style={{ color: "#ff0000" }}
        onClick={() => removeMOC(sample.id, moc.mocId)}
      >
        Remove
      </Button>
    </>
  );
};

export default MOC;
