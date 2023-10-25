import React, { useState } from "react";
import "./LoginForm.css";
import users from "../../assets/users.json";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = () => {
    setLoginError(null);

    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    try {
      if (user) {
        // Authentication successful
        console.log("Authentication successful");
      } else {
        // Authentication failed
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      setLoginError("An error occurred. Please try again later.");
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pwInput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleLogin}>Log In</button>
        </div>
        {loginError && <p className="error">{loginError}</p>}
      </div>
    </div>
  );
}

export default LoginForm;
