import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="City">
        <h1>{props.data.city}</h1>
      </div>
      <div className="date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="Icon">
        <img
          src={require(`./images/${props.data.icon}.png`)}
          alt={props.data.condition}
          className="icon"
        />
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <span className="temperature">
            {Math.round(props.data.temperature)}
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
          <span>{props.data.humidity}</span>%
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
          <span>{Math.round(props.data.wind)}</span>
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
            <div className="card-body pressure">{props.data.pressure}</div>
          </div>
        </div>
        <div className="col-2">
          <div className="card bg-light border-light rounded-pill">
            <div className="card-body max">
              <span>{Math.round(props.data.max)}</span>º
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card bg-light border-light rounded-pill">
            <div className="card-body min">
              <span>{Math.round(props.data.min)}</span>º
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-light border-light rounded-pill">
            <div className="card-body text-capitalize condition">
              {props.data.condition}
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
}
