import React from "react";
import background from "./sky.png";
import "./Style.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 15:26",
    temperature: "30",
    description: "Clouds",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="We">
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
                <button
                  type="submit"
                  className="btn btn-light fas fa-search search"
                ></button>
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
            alt={weatherData.description}
            className="icon"
          />
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <span className="temperature">{weatherData.temperature}</span>
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
            <span>{weatherData.wind}</span>
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
              <div className="card-body pressure">1018</div>
            </div>
          </div>
          <div className="col-2">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body max">
                <span>24</span>º
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body min">
                <span>20</span>º
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card bg-light border-light rounded-pill">
              <div className="card-body humidity">
                {weatherData.description}
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
      <footer class="reference">
        <a
          href="https://github.com/paulinagonzalezc/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Paulina Gonzalez</span>
      </footer>
    </div>
  );
}
