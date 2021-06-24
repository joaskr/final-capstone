import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="banner">
      <div className="header-texts">
        <h1 className="main-header">
          The internet is not only for the Big Players. <br /> Why should
          cybersecurity be any different?
        </h1>

        <h2 className="sub-header">cybersecurity for small businesses</h2>
        <button className="header-button">
          <Link to="welcome" smooth={true} duration={500}>
            <FontAwesomeIcon
              className="header-icon"
              icon={faChevronCircleDown}
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
