import React, { Component } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../api";

class FrontSide extends Component {
  state = { currentWeather: null, prevCityId: null };
  updateWeather = () => {
    getWeatherForLocation(this.props.currentCity).then(weather => {
      console.log(weather.currently);
      this.setState({ currentWeather: weather.currently });
    });
  };

  componentDidMount() {
    this.updateWeather();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentCity.woeid !== prevState.prevCityId) {
      return {
        prevCityId: nextProps.currentCity.woeid,
        currentWeather: null
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWeather) {
      return null;
    }
    this.updateWeather();
  }

  render() {
    if (!this.state.currentWeather) {
      return null;
    }

    const {
      icon,
      temperature,
      apparentTemperature,
      summary
    } = this.state.currentWeather;

    return (
      <FrontSideView
        date={moment()}
        icon={icon}
        temperature={temperature}
        summary={summary}
        apparentTemperature={apparentTemperature}
        currentCityName={this.props.currentCity.title}
        onClick={this.props.onClick}
      />
    );
  }
}

export default FrontSide;
