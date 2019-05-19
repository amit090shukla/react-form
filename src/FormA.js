import React, { useState } from "react";
import { TextField, Button, withStyles, Divider } from "@material-ui/core";
import "./global.css";
import { styles } from "./UI";
import SwabSample from "./components/SwabSample";
//-----------------------------------------------------------CONSTANTS-------------------------------------------------------------

let ID = 0;
let SWAB_MOC_ID = 0;

//------------------------------------------------------------REACT FC-------------------------------------------------------------

const FormA = ({ classes }) => {
  //Hooks State

  const [LOD, setLOD] = useState();
  const [LOQ, setLOQ] = useState();
  const [reason, setReason] = useState();
  const [swabSample, setSwabSample] = useState([]);

  //CRUD Functions

  const addSwabSample = () => {
    const newSample = {
      id: ID++,
      methodUsed: "",
      solventName: "",
      solventQuantity: "",
      defaultRecovery: "",
      MOC: []
    };
    setSwabSample([...swabSample, newSample]);
  };

  const removeSamplingParameter = id =>
    setSwabSample(swabSample.filter(sample => sample.id !== id));

  const updateSwabSamplingData = (e, key, id) => {
    const tempData = swabSample.filter(sample => sample.id === id)[0];
    tempData[key] = e.target.value;
    setSwabSample([...swabSample]);
  };

  const addSwabMOC = id => {
    const newMOC = { type: "", recovery: "", mocId: `moc_${SWAB_MOC_ID++}` };
    const newSample = swabSample.filter(sample => sample.id === id)[0];
    newSample["MOC"] = [...newSample.MOC, newMOC];
    setSwabSample([...swabSample]);
  };

  const removeMOC = (sampleID, mocID) => {
    const filteredSample = swabSample.filter(
      sample => sample.id === sampleID
    )[0];
    const filteredMOC = filteredSample.MOC.filter(moc => moc.mocId != mocID);
    const newSampleObj = { ...filteredSample, MOC: filteredMOC };
    const remaningSamples = swabSample.filter(sample => sample.id != sampleID);
    setSwabSample([...remaningSamples, newSampleObj]);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextField
          variant="outlined"
          label="LOD (in PPM)"
          InputLabelProps={{ shrink: true }}
          required
          type="number"
          onChange={e => setLOD(e.target.value)}
          value={LOD}
          style={{ marginRight: "10px" }}
        />
        <TextField
          variant="outlined"
          label="LOQ (in PPM)"
          InputLabelProps={{ shrink: true }}
          required
          type="number"
          onChange={e => setLOQ(e.target.value)}
          value={LOQ}
        />
      </div>
      <div className="spacer" />
      {swabSample.map(sample => (
        <SwabSample
          sample={sample}
          removeSamplingParameter={removeSamplingParameter}
          updateSwabSamplingData={updateSwabSamplingData}
          removeMOC={removeMOC}
          addSwabMOC={addSwabMOC}
          key={sample.id}
        />
      ))}
      <div className="spacer" />
      <Divider />
      <div className="spacer" />
      <Button
        variant="outlined"
        onClick={addSwabSample}
        color="primary"
        className={classes.fullWidth}
      >
        Configure Swab Sampling Parameters
      </Button>
      <div className="spacer" />
      <Button variant="outlined" className={classes.fullWidth}>
        Configure Rinse Sampling Parameters
      </Button>
      <div className="spacer" />
      <TextField
        variant="outlined"
        label="Reason"
        InputLabelProps={{ shrink: true }}
        required
        fullWidth={true}
        value={reason}
        onChange={e => setReason(e.target.value)}
      />
    </div>
  );
};

export default withStyles(styles)(FormA);
