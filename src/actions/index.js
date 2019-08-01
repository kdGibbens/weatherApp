// Import API
import apis from "../apis";
import { api } from "../apis/apis";

export const fetchPosts = () => async dispatch => {
  const response = await api.weather.get("");

  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};
