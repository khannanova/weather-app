import React from "react";
import "./card.css";
import optionsImage from "./options.svg";
import WeatherIcons from "./WeatherIcons";

export default ({
  date,
  icon,
  temperature,
  summary,
  apparentTemperature,
  currentCityName,
  onClick
}) => {
  return (
    <div className={`card is-${icon}`}>
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>
      <WeatherIcons icon={icon} />
      <div className="card-row">
        <div className="card-temperature">
          {`${parseInt(temperature, 10)}°`}
          <span className="small">/ {parseInt(apparentTemperature, 10)}°</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>
      <div className="card-line" />
      <div className="card-row">
        <div className="card-city">{currentCityName}</div>
        <button className="card-options" onClick={onClick}>
          <img src={optionsImage} alt="options" width={32} />
        </button>
      </div>
    </div>
  );
};
