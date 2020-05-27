import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";
import bgImageReducer from "./backgroundReducer";

const rootReducer = combineReducers({ WeatherReducer, bgImageReducer });

export default rootReducer;
