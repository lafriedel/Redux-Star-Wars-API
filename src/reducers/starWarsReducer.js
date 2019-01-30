import {
  CHAR_FETCH_START,
  CHAR_FETCH_SUCCESS,
  CHAR_FETCH_FAIL
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer ", action);
  switch (action.type) {
    case CHAR_FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case CHAR_FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      };
    case CHAR_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
