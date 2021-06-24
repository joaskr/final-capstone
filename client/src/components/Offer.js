import React from "react";
import { NavLink } from "react-router-dom";
import codePic from "../assets/code.jpg";
function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-image-div">
        <img
          src={codePic}
          alt="laptop with code editor"
          className="offer-image"
        ></img>
      </div>
      <div className="offer-text-div">
        <div className="offer-text">
          <h2>services</h2>
          <span className="horizontal-line">
            <hr></hr>
          </span>
          <p>
           We all know the pain of paying for a whole bag of potatoes at the local 
           grocery store while all you wanted was two potatoes. That's why we give 
           our customers a choice between 3 Protection Plans, so that you only pay 
           for the services that best suit the needs of your company.
          </p>
          <div className="plans-container">
            <div className="plan">
            <h3>The Basic Protection Plan</h3>
              <ul>
                <li>Antivirus software</li>
                <li>Network protection: proxy server, firewall</li>
                <li>Security Awareness training.</li>
              </ul>
            </div>
            <div className="plan">
            <h3>The Silver Protection Plan</h3>
              <ul>
                <li>All the services available in the Basic Protection Plan</li>
                <li>Encryption solutions: WPA/WPA2, the CA hierarchy design</li>
                <li>Network protection: DMZ, NAT router</li>
                <li>Backup Cloud Services: encryption, password security, data loss prevention.</li>
              </ul>
            </div>
            <div className="plan">
            <h3>The Gold Protection Plan</h3>
              <ul>
                <li>All the services available in the Basic Protection Plan and in the Silver Protection Plan</li>
                <li>Security for mobile devices</li>
                <li>Remote security options</li>
                <li>Security consulting</li>
              </ul>
            </div>
          </div>

          <p>Pricing depends on the number of seats in your company. 
            Please reach out to us via the <NavLink to="/contact">Contact</NavLink> form and we can provide you with more details.</p>

        </div>
      </div>
    </div>
  );
}
export default Offer;
