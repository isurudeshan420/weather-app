import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="loginForm">
      <div className="columnItems">
        <div className="loginLabel">
          <h1>Login</h1>
        </div>
        <div className="unameInput">
          <input
            type="text"
            placeholder="Username"
            // Add any necessary props or state here
          />
        </div>
        <div className="pwInput">
          <input
            type="password"
            placeholder="Password"
            // Add any necessary props or state here
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
