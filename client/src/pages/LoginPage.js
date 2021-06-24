import React, { useState } from "react";
import { useAuth } from "../firebase/auth";
import { Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
  const { loggedIn } = useAuth();
  const [loginVisible, setLoginVisible] = useState(true);
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  const toggleView = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <div className="login-page">
      <Nav />
      <main className="login-content-div">
        <div className="login-content">
          <label className="toggle-label">
            <input type="checkbox" onClick={toggleView} />
            <span className="back">
              <span className="toggle"></span>
              <span className="label on">Log in</span>
              <span className="label off">Register</span>
            </span>
          </label>
          {loginVisible && <Login></Login>}
          {!loginVisible && <Register></Register>}
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
