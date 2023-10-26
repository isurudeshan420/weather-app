import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import WeatherComponent from "../components/WeatherComponent";
import SearchComponent from "../components/SearchComponent";
import "./WeatherPage.css";
import AuthContext from "../../context/AuthContext";

function WeatherPage() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState({});

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getHomeWeather();
  }, []);

  const getHomeWeather = () => {
    const homeLat = 6.9271;
    const homeLon = 79.8612;
    const HOME_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${homeLat}&lon=${homeLon}&units=metric&appid=304a53b0dafcaa5d3c6c76362027c039`;

    axios
      .get(HOME_URL)
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="weatherPage">
      <h1>Weather Map</h1>

      <SearchComponent
        lat={lat}
        lon={lon}
        setLat={setLat}
        setLon={setLon}
        setData={setData}
        getHomeWeather={getHomeWeather}
      />

      <WeatherComponent data={data} />

      <div className="logoutButton">
        <button onClick={logoutUser}> Logout </button>
      </div>
    </div>
  );
}

export default WeatherPage;
