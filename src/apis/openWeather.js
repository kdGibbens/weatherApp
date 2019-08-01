import axios from "axios";

export default axios.create({
  baseURL: "api.openweathermap.org/data/2.5/forecast?lat=35&lon=139"
});
