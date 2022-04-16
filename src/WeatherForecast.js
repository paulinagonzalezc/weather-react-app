import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "91ddd16622a3322fcdf9394f7672a655";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
