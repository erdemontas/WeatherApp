//React
import React from "react";
//Components
import WeatherCard from "./components/WeatherCard/WeatherCard";
import City from "./components/City/City";
import Background from "./components/Background/Background";
//Material

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
  },

  box: {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Background />
      <Box className={classes.container} id="Container">
        <Box borderColor="primary.main" {...classes.box}>
          <City />
          <WeatherCard />
        </Box>
      </Box>
    </div>
  );
}

export default App;
