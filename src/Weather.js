import React, { useState } from "react";
import background from "./sky.png";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 19:55",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      condition: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div
        className="container Weather"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="Search">
          <div className="row">
            <i type="button" className="col-8 fas fa-bars bars"></i>

            <form className="col-4 form-inline">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search city..."
                  autoComplete="off"
                  autoFocus="on"
                />
                <button type="submit" className="btn btn-light search">
                  🔍
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Location">
          <div className="row">
            <div className="col-8"></div>
            <button type="button" className="col-4 btn btn-link location">
              <span role="img" aria-label="label">
                Location📍
              </span>
            </button>
          </div>
        </div>
        <div className="City">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="Date">
          <p className="date">{weatherData.date}</p>
        </div>
        <div className="Icon">
          <img
            src={require("./11d.png")}
            alt={weatherData.condition}
            className="icon"
          />
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="symbol">º</span>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-2 drop-col">
            <img
              src={require("./droplet.png")}
              className="drops"
              alt="drops"
              width="35%"
            />
          </div>
          <div className="col-2 humid">
            <span>{weatherData.humidity}</span>%
          </div>
          <div className="col-4"></div>
          <div className="col-2 wind-col">
            <img
              src={require("./wind.png")}
              className="wind"
              alt="wind"
              width="50%"
            />
          </div>
          <div className="col-2 vel">
            <span>{Math.round(weatherData.wind)}</span>
            <span className="km"> km/hr</span>
          </div>
        </div>
        <div className="row weather-labels">
          <div className="col-4">Humidity</div>
          <div className="col-4 scale">
            <span>
              <a href="/" className="active">
                ºC
              </a>
            </span>{" "}
            |
            <span>
              <a href="/">ºF</a>
            </span>
          </div>
          <div className="col-4">Wind</div>
        </div>
        <div className="row weather-details">
          <div className="col-4">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body pressure">{weatherData.pressure}</div>
            </div>
          </div>
          <div className="col-2">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body max">
                <span>{Math.round(weatherData.max)}</span>º
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body min">
                <span>{Math.round(weatherData.min)}</span>º
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body text-capitalize condition">
                {weatherData.condition}
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row weather-tags">
          <div className="col-4">Pressure</div>
          <div className="col-2">Max</div>
          <div className="col-2">Min</div>
          <div className="col-4">Condition</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "91ddd16622a3322fcdf9394f7672a655";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
