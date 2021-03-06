import React, { useState } from "react";
import background from "./sky.png";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      condition: response.data.weather[0].description,
    });
  }
  function search() {
    const apiKey = "91ddd16622a3322fcdf9394f7672a655";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function hanldeCityChange(event) {
    setCity(event.target.value);
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

            <form className="col-4 form-inline" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search city..."
                  autoComplete="off"
                  autoFocus="on"
                  onChange={hanldeCityChange}
                />
                <button type="submit" className="btn btn-light search">
                  ????
                </button>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
