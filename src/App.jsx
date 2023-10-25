import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./features/pages/LoginPage";
import WeatherPage from "./features/pages/WeatherPage";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Router>
  );
}

export default App;
