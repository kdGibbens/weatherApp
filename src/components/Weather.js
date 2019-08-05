import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

class Weather extends React.Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.props.fetchWeather(lat, long);
    });
  }
  setUnit() {
    return this.props.unit === "Farenheit" ? this.props.weather.main.temp : "";
  }
  renderWeather() {
    console.log(this.props.unit);
    if (this.props.weather.main) {
      return (
        <div className="columns is-multiline">
          <div className="column is-full">
            <h1 className="title is-1 has-text-centered	">
              {this.props.weather.name}
            </h1>
          </div>

          <div className="column is-full">
            <h1 className="title is-2 has-text-centered	">
              {this.setUnit()} <span>&#8457;</span>
            </h1>
          </div>
        </div>
      );
    }
    return (
      <progress className="progress is-large is-primary" max="100">
        60%
      </progress>
    );
  }
  render() {
    return <div className="section">{this.renderWeather()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    unit: "Farenheit"
  };
};
export default connect(
  mapStateToProps,
  {
    fetchWeather
  }
)(Weather);
