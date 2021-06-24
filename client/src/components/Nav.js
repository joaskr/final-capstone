import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import { auth } from "../firebase/firebase";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { loggedIn } = useAuth();
  return (
    <>
      <nav className="nav-section" id="nav">
        <img src={logo} alt="m&p logo" className="logo"></img>
        <ul className="nav-list">
          <li className="nav-link-cont">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeStyle={{ background: "#a53f52" }}
            >
              Start
            </NavLink>
          </li>
          <li className="nav-link-cont">
            <NavLink
              to="/about"
              className="nav-link"
              activeStyle={{ background: "#a53f52" }}
            >
              About us
            </NavLink>
          </li>
          <li className="nav-link-cont">
            <NavLink
              to="/data"
              className="nav-link"
              activeStyle={{ background: "#a53f52" }}
            >
              Data analysis
            </NavLink>
          </li>
          <li className="nav-link-cont">
            <NavLink
              to="/contact"
              className="nav-link"
              activeStyle={{ background: "#a53f52" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="account-buttons">
          <button className={loggedIn ? "invisible" : "account-button"}>
            <NavLink exact to="/login" className="account-link">
              <FontAwesomeIcon icon={faSignInAlt} />
            </NavLink>
          </button>
          {loggedIn && (
            <button
              className="account-button logout-button"
              onClick={() => auth.signOut()}
            >
              <NavLink exact to="/logout" className="account-link">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </NavLink>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
