import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bgImage: {
    /* Full height */
    height: "100vh",

    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: 1,
    width: "-moz-available",
    width: "100%"
  },
});

const Background = () => {
  const store = useSelector((store) => store.bgImageReducer);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div
      id="Background"
      className={classes.bgImage}
      style={{
        backgroundImage: `url(${store.bgImageUrl})`,
      }}
    ></div>
  );
};

export default Background;
