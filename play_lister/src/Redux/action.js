import axios from "axios";
import * as types from "./actionTypes";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  axios
    .get("https://internship-service.onrender.com/videos")
    .then((res) => {
      console.log("data from acrion", res.data);
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      console.log("error from action", err);
      dispatch({ type: types.GET_DATA_ERROR})
    });
};


