import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../firebase/auth";

const Logout = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="logout-page">
      <Nav />
      <main className="logout-content">
        <div className="login-header">
          <h3>Wylogowanie nastąpiło pomyślnie!</h3>
        </div>
        <button className="control-button logout-page-btn">
          <NavLink exact to="/" className="control-link">
            Strona główna
          </NavLink>
        </button>
      </main>
    </div>
  );
};

export default Logout;
