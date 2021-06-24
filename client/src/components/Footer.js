import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = (props) => {
  return (
    <div className={props.class}>
      <div className="footer-content">
        <h2 className="footer-text">let's work together</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <button className="footer-btn"><NavLink to="/contact">CONTACT US</NavLink></button>
        <button className="header-button">
          <Link to="nav" smooth={true} duration={500}>
            <FontAwesomeIcon
              className="header-icon"
              icon={faChevronCircleUp}
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
