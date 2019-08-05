// Import API
import openWeather from "../apis/openWeather";

export const fetchWeather = (lat, long) => async dispatch => {
  let key = "";
  const response = await openWeather(
    `/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`
  );

  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};

export const setUnit = () => dispatch => {};
