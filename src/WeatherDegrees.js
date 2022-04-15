import React, { useState } from "react";

export default function WeatherDegrees(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherDegrees">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="symbol">º</span>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 units">
            <span>
              ºC |{" "}
              <a href="/" onClick={showFahrenheit}>
                ºF
              </a>
            </span>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDegrees">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="symbol">º</span>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 units">
            <span>
              <a href="/" onClick={showCelsius}>
                ºC
              </a>{" "}
              | ºF
            </span>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
