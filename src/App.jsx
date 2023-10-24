import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './features/pages/LoginPage';
import WeatherPage from './features/pages/WeatherPage';

function App() {
   
  //const URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=304a53b0dafcaa5d3c6c76362027c039';
  //https://api.openweathermap.org/data/2.5/weather?lat=38.8951&lon=-77.0364&appid=304a53b0dafcaa5d3c6c76362027c039

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/weather" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
