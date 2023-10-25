import React from "react";
import "./WeatherComponent.css";

function WeatherComponent({ data }) {
  // console.log(data);
  return (
    <div className="container">
      <div className="top">
        <div className="location">
        <h1>{data && data.name}, {data && data.sys && data.sys.country}</h1>

        </div>

        <div className="temperature">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>

        <div className="coordinates">
          <div className="lat">
          {data.main ? <h2>{data.coord.lat}</h2> : null}
          </div>
          <div className="lon">
          {data.main ? <h2>{data.coord.lon}</h2> : null}
          </div>
        </div>

        <div className="description">
          {data.weather ? <h2>{data.weather[0].main}</h2> : null}
        </div>
      </div>

      <div className="bottom">
        <div className="feels">
          {data.main ? (
            <p className="bold">{data.main.feels_like.toFixed()}°F</p>
          ) : null}
          <p>Feels Like</p>
        </div>

        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>

        <div className="wind">
          {data.wind ? (
            <p className="bold">{data.wind.speed.toFixed()} MPH</p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
