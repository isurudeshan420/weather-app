import React from 'react';

import LoginForm from '../components/LoginForm';
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <h1>Weather Map Login</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;