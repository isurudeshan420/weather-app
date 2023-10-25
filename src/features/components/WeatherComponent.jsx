import React from "react";
import "./WeatherComponent.css";

function WeatherComponent(lat, lon, data) {
  //console.log(data)
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <h2>{data && data.name} </h2>
          {console.log(data,lat,lon)}
        </div>

        <div className="temperature">
          <h2>30°C</h2>
        </div>

        <div className="coordinates">
          <div className="lat">
            <p>latitude</p>
          </div>
          <div className="lon">
            <p>longitude</p>
          </div>
        </div>

        <div className="description">
          <p>Sunny</p>
        </div>
      </div>

      <div className="bottom">
        <div className="feels">
          <p>Feels like 30°C</p>
        </div>

        <div className="humidity">
          <p>Humidity: 30%</p>
        </div>

        <div className="wind">
          <p>Wind: 30 km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
