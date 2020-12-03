import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sliderPost } from "../logic/Post";

export default ({ title, state, mark }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  const [value, setValue] = useState(state);
  const handleSliderChange = (_, newValue) => {
    if (value !== newValue) {
      setValue(newValue);

      sliderPost(newValue, title);
    }
  };

  return (
    <div className={classes.root} style={{ marginTop: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography id="discrete-slider-custom" gutterBottom>
          {title}
        </Typography>
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
