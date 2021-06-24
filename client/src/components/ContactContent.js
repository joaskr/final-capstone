import React from "react";
import fb from "../assets/sm/facebook.png";
import li from "../assets/sm/li.png";
import ig from "../assets/sm/instagram.png";
import tt from "../assets/sm/twitter.png";
const ContactContent = () => {
  return (
    <div className="contact-content">
      <div className="contact-content-text">
        <h2>get in touch</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <p>
          Want to get in touch? We'd love to hear from you. Fill out the form
          and we will contact you very soon
        </p>
        <p>You can also find us here:</p>
        <div className="social-media">
          <a href="facebook.com">
            <img className="sm-image" src={fb} alt="facebook logo"></img>
          </a>
          <a href="linkedin.com">
            <img className="sm-image" src={li} alt="linkedin logo"></img>
          </a>
          <a href="instagram.com">
            <img className="sm-image" src={ig} alt="instagram logo"></img>
          </a>
          <a href="twitter.com">
            <img className="sm-image" src={tt} alt="twitter logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
