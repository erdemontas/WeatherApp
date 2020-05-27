import {
  FETCH_IMAGE_FAIL,
  FETCH_IMAGE_SUCCESS,
  FETCH_WEATHER_START,
  GET_SEARCH_KEYWORDS,
} from "../actions/actionTypes";

const initialState = {
  bgImageUrl: "https://images.unsplash.com/photo-1560322759-3b199d3e4513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  bgImageName: "",
  bgImageKeywords: [],
};

const bgImageReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_WEATHER_START:
      return {
        ...state,
        bgImageKeywords: [...state.bgImageKeywords, action.payload],
      };

    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        bgImageUrl: action.payload
      };

    case FETCH_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_SEARCH_KEYWORDS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default bgImageReducer;
