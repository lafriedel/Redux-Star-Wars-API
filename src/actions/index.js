import axios from 'axios';
// we'll need axios

export const CHAR_FETCH_START = "CHAR_FETCH_START";
export const CHAR_FETCH_SUCCESS = "CHAR_FETCH_SUCCESS";
export const CHAR_FETCH_FAIL = "CHAR_FETCH_FAIL";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchChars = () => dispatch => {
    dispatch({ type: CHAR_FETCH_START });
 axios.get("https://swapi.co/api/people")
    .then(res => {
        console.log(res.data);
        // dispatch({ type: CHAR_FETCH_SUCCESS, payload: res })
    })
    // .catch(err => dispatch({ type: CHAR_FETCH_FAIL, payload: err}));
}