import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useComtimize = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "green",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default (props) => {
  const classes = useComtimize();
  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
};
