export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="card forecastCard">
      <img
        src={require(`./images/${props.data.weather[0].icon}.png`)}
        className="iconForecast"
        alt="weatherIcon"
      />
      <div className="card-body">
        <p className="card-text weatherForecast-temperatures">
          <span className="fore-max">{maxTemperature()} </span>
          <span className="fore-min">{minTemperature()}</span>
        </p>
      </div>
      <div className="weatherForecast-day">{day()}</div>
    </div>
  );
}
