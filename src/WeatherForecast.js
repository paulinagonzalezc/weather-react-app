import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row WeatherForecast">
      <div className="col-3">
        <div className="card forecastCard">
          <img
            src={require(`./images/01d.png`)}
            className="iconForecast"
            alt="weatherIcon"
          />
          <div className="card-body">
            <p className="card-text weatherForecast-temperatures">
              <span className="fore-max">36º </span>
              <span className="fore-min">23º</span>
            </p>
          </div>
          <div className="weatherForecast-day">Saturday</div>
        </div>
      </div>
    </div>
  );
}
