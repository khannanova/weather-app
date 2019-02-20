import React from "react";

export default class CityItem extends React.Component {
  onClick = () => {
    const { onSelect, city } = this.props;
    onSelect(city);
  };

  render() {
    const { city, isSelected } = this.props;

    return (
      <li
        onClick={this.onClick}
        className={`list-item ${isSelected ? "is-selected" : ""}`}
      >
        {city.title}
      </li>
    );
  }
}
