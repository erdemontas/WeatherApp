import * as types from "./actionTypes";


export function fetchWeatherStart(payload) {
  const action = {
    type: types.FETCH_WEATHER_START,
    payload
  };
  return action;
}

export function fetchWeatherSuccess(payload) {
  const action = {
    type: types.FETCH_WEATHER_SUCCESS,
    payload
  };
  return action;
}

export function fetchWeatherFailed(error) {
  const action = {
    type: types.FETCH_WEATHER_FAIL,
    payload: error,
  };
  return action;
}

export function fetchImageStart(payload) {
  
  const action = {
    type: types.FETCH_IMAGE_START,
    payload
  };
  return action;
}

export function fetchImageSuccess(payload) {
  console.log("Payload: ",payload)
  const action = {
    type: types.FETCH_IMAGE_SUCCESS,
    payload
  };
  return action;
}

export function fetchImageFailed(error) {
  const action = {
    type: types.FETCH_IMAGE_FAIL,
    payload: error,
  };
  return action;
}


