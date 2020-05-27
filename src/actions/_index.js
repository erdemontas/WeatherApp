import { api } from "../api";

// weather:data.list[0].main.temp,
// temp:data.list[0].weather[0].main,

export const getWeather = (cityName) => {
  api
    .getWeatherByCityName()
    .then((data) => {
        weather: data.list[0].main.temp,
        temp: data.list[0].weather[0].main
    })
    .catch((err) => console.log("api:", err));
};
