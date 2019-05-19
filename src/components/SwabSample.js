import React from "react";
import { Button, TextField, withStyles } from "@material-ui/core";
import MOC from "./MOC";
import { styles } from "../UI";

const SwabSample = ({
  sample,
  classes,
  removeSamplingParameter,
  updateSwabSamplingData,
  removeMOC,
  addSwabMOC
}) => {
  return (
    <>
      <Button
        className={classes.btnRemove}
        variant="contained"
        onClick={() => removeSamplingParameter(sample.id)}
      >
        Remove Swab Sampling Parameters
      </Button>
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Method Used"
        InputLabelProps={{ shrink: true }}
        required
        value={sample.methodUsed}
        onChange={e => updateSwabSamplingData(e, "methodUsed", sample.id)}
        fullWidth
      />
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Solvent Used"
        InputLabelProps={{ shrink: true }}
        required
        value={sample.solventName}
        onChange={e => updateSwabSamplingData(e, "solventName", sample.id)}
        fullWidth
      />
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Solvent Quantity"
        InputLabelProps={{ shrink: true }}
        required
        value={sample.solventQuantity}
        onChange={e => updateSwabSamplingData(e, "solventQuantity", sample.id)}
        fullWidth
      />
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Default Recovery (%)"
        InputLabelProps={{ shrink: true }}
        required
        value={sample.defaultRecovery}
        onChange={e => updateSwabSamplingData(e, "defaultRecovery", sample.id)}
        fullWidth
      />
      <div className="spacer" />
      {sample.MOC.map(moc => (
        <div className={classes.mocWrapper} key={moc.mocId}>
          <MOC sample={sample} moc={moc} removeMOC={removeMOC} />
        </div>
      ))}
      <div className="spacer" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addSwabMOC(sample.id)}
      >
        Add MOC
      </Button>
    </>
  );
};

export default withStyles(styles)(SwabSample);
