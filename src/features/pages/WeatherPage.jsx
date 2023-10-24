import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import SearchComponent from '../components/SearchComponent';

function WeatherPage() {
  return (
    <div>
      <h1>Weather Page</h1>
      <SearchComponent />
      <WeatherComponent />
    </div>
  );
}

export default WeatherPage;