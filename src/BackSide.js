import React from "react";
import CititesList from "./CitiesList";
import "./button.css";

export default ({ onClick, cities, currentCity, onSelect }) => {
  return (
    <div className="card-back">
      <CititesList
        cities={cities}
        currentCity={currentCity}
        onSelect={onSelect}
      />
      <button className="button" onClick={onClick}>
        Flip Back
      </button>
      ;
    </div>
  );
};
