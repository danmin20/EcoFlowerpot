import React from "react";
import { Slider, Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default ({ title, mark }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root} style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography id="discrete-slider-custom" gutterBottom>
          {title}
        </Typography>
        <Input
          style={{ marginLeft: "10px" }}
          value={value}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </div>
      <Slider
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        defaultValue={0}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={mark}
      />
    </div>
  );
};
