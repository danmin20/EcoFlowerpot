import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { sliderPost } from "../logic/Post";

const CustomizedSlider = withStyles({
  root: {
    color: "gray",
    height: 8,
    width: 300,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    marginTop: -6,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default ({ title, state, mark }) => {
  const [value, setValue] = useState(state);
  const handleSliderChange = (_, newValue) => {
    if (value !== newValue) {
      setValue(newValue);

      sliderPost(newValue, title);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>{title}</div>
      </div>
      <CustomizedSlider
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
