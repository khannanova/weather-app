import React, { Component } from "react";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import "./panel.css";
import cities from "./cities.json";

class App extends Component {
  state = { flipped: false, currentCity: cities[0] };
  onFlip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  onSelectCity = city => {
    this.setState({ currentCity: city });
  };
  render() {
    return (
      <div className={`panel ${this.state.flipped ? "flip" : ""}`}>
        <div className="panel-front">
          <FrontSide
            onClick={this.onFlip}
            currentCity={this.state.currentCity}
          />
        </div>
        <div className="panel-back">
          <BackSide
            cities={cities}
            onClick={this.onFlip}
            currentCity={this.state.currentCity}
            onSelect={this.onSelectCity}
          />
        </div>
      </div>
    );
  }
}

export default App;
