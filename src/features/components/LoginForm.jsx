import React, { useContext, useState } from "react";
import "./LoginForm.css";
import AuthContext from "../../context/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AuthContext);
  const {loginError} = useContext(AuthContext);

  const handleLogin = () => {
    loginUser(username,password);
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
