import React from "react";
import "./SearchComponent.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function SearchComponent({ lat, lon, setLat, setLon, setData, getHomeWeather }) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=304a53b0dafcaa5d3c6c76362027c039`;
  //https://api.openweathermap.org/data/2.5/weather?lat=38.8951&lon=-77.0364&appid=304a53b0dafcaa5d3c6c76362027c039

  const searchLocation = () => {
    axios.get(URL)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  
    setLat("");
    setLon("");
  };


  const handleHomeClick = () => {
    getHomeWeather();
  };


  return (
    <div className="container">
      <div className="rowItems">
        <div className="home" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} />
        </div>

        <div className="coordinatesInput">
          <input
            type="text"
            value={lat}
            placeholder="Latitude"
            onChange={(e) => setLat(e.target.value)}
          />
        </div>

        <div className="coordinatesInput">
          <input
            type="text"
            value={lon}
            placeholder="Longitude"
            onChange={(e) => setLon(e.target.value)}
          />
        </div>
        <div className="search">
          <button className="searchButton" onClick={searchLocation}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
