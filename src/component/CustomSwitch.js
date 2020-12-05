import { Switch, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { switchPost } from "../logic/Post";

const CustomizedSwitch = withStyles({
  switchBase: {
    color: "gray",
    "&$checked": {
      color: "white",
    },
    "&$checked + $track": {
      backgroundColor: "white",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default ({ title, state }) => {
  const [value, setValue] = useState(state);

  const handleChange = (event) => {
    event.persist();
    setValue(!value);

    switchPost(!value, title);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div>{title}</div>
      <CustomizedSwitch
        checked={value}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};
