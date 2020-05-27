//React
import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as actions from "../../actions/actionCreators";

//Components
import api from "../../api";
import { capitalizeFirstLetter } from "../utils";

//Material
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
  search:{
    display:"flex",
    flexDirection: "row",
    textAlign:"center",
    width:"40%",
    height:"40%"
  }
});


const City = () => {
  const store = useSelector(store => store)
  const classes = useStyles();
  const dispatch = useDispatch()
  const [cityName, setCityName] = useState();



  const onChangeHandler = (event) => {
    const city = capitalizeFirstLetter(event.target.value);
    setCityName(city);
  };


  //image-> data.urls.raw
  const onClickHandler = () => {
    console.log("Clicked")
    dispatch(actions.fetchWeatherStart(cityName));
    dispatch(actions.fetchImageStart(cityName))
  };

  return (
    <div className={classes.search} id="City">
      <TextField
        onChange={onChangeHandler}
        label="Enter your city"
        margin="normal"
      ></TextField>
      <Button variant="contained" onClick={onClickHandler}>Submit</Button>      
    </div>
  );
};

// export default connect(null, fetchWeather)(City);
export default City
