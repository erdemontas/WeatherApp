import { FETCH_WEATHER_START, FETCH_IMAGE_START } from "../actions/actionTypes";

import {
  fetchWeatherSuccess,
  fetchWeatherFailed,
  fetchImageSuccess,
} from "../actions/actionCreators";

import api from "../api";

import { takeLatest, all, call, put } from "redux-saga/effects";

//TODO: Move this to utils
function transformWeatherData(data) {
  const weatherData = {
    city: {
      name: data.city.name,
      country: data.city.country,
      timezone: data.city.timezone,
    },
    weather: {
      temperature: data.list[0].main.temp,
      main: data.list[0].weather[0].main,
      description: data.list[0].weather[0].description,
    },
    date: new Date(data.list[0].dt_txt),
  };

  return weatherData;
}

//Generator function.Will resolve promise
export function* fetchWeatherByCityNameSaga(action) {
  try {
    const response = yield call(api.getWeatherByCityName, action.payload);
    const weatherData = yield call(transformWeatherData, response);
    yield put(fetchWeatherSuccess(weatherData));
  } catch (err) {
    yield put(fetchWeatherFailed(err));
  }
}

export function* fetchBackgroundImage(action) {
  try {
    const response = yield call(api.getRandomImageByKeyword, action.payload);
    console.log("Response:", response.urls.raw)
    yield put(fetchImageSuccess(response.urls.raw));
  } catch (err) {
    yield put(fetch);
  }
}

export function* watcherSagas() {
  yield all([
    yield takeLatest(FETCH_WEATHER_START, fetchWeatherByCityNameSaga),
    yield takeLatest(FETCH_IMAGE_START, fetchBackgroundImage)
  ]);
}
