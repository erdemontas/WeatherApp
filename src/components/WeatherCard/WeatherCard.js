//React
import React from "react";
//Components

//Material
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    width: "40%",
    height: "40%",
  },
});

const WeatherCard = (props) => {
  const classes = useStyles();
  const store = useSelector((store) => store.WeatherReducer);  

  const populateWeatherCard = () => {
    let i;
    let cards = [];
    if (store.weatherData) {
      for (i = 0; i < 5; i++) {
        cards.push(
          <div>
            <WiDaySunny size="60">ITS A CARD</WiDaySunny>
            <Typography>{store.weatherData.weather.temperature}</Typography>
            <Typography>{store.weatherData.weather.main}</Typography>
            <Typography>{store.weatherData.weather.description}</Typography>
          </div>
        );
      }
    }
    return cards;
  };

  return (
    <div className={classes.cards} id="Weather">
      ZAAAA{populateWeatherCard()}
    </div>
  );
};

export default WeatherCard;
