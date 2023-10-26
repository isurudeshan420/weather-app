import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import users from "../assets/users.json";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loginError, setLoginError] = useState(null);

  let navigate = useNavigate();

  let loginUser = (userName, password) => {
    const user = users.find(
      (user) => user.username === userName && user.password === password
    );
    try {
      if (user) {
        // Authentication successful
        console.log("Authentication successful");
        setIsLogged(true);
        navigate("/");
      } else {
        // Authentication failed
        setLoginError("Invalid username or password");
        setIsLogged(false);

      }
    } catch (error) {
      console.error("Error loading user data:", error);
      setLoginError("An error occurred. Please try again later.");
    }
  };

  let logoutUser = () => {
    setIsLogged(false);
    navigate("/login");
  };

  let contextData = {
    isLogged: isLogged,
    loginUser: loginUser,
    logoutUser: logoutUser,
    loginError: loginError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
