import { Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { switchPost } from "../logic/Post";

export default ({ title, state }) => {
  const [value, setValue] = useState(state);

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.checked);

    switchPost(value, title);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Typography id="discrete-slider-custom" gutterBottom>
        {title}
      </Typography>
      <Switch
        checked={value}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};
