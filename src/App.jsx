import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./features/pages/LoginPage";
import WeatherPage from "./features/pages/WeatherPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route element={<PrivateRoutes />}>
              <Route index element={<WeatherPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
