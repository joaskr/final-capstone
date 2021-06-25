import React from "react";
import aro from "../assets/logos/aro-3997.svg";
import burdines from "../assets/logos/burdines-15294.svg";
import cfx from "../assets/logos/cfx-bank.svg";
import conley from "../assets/logos/conley-corporation.svg";
import mannen from "../assets/logos/mannenrantsoen-2.svg";
import navin from "../assets/logos/navin.svg";
import nike from "../assets/logos/nike-270.svg";

function Clients() {
  return (
    <div className="clients-section">
      <div className="clients-section-content">
        <h2 className="clients-section-text">our clients</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <div className="clients">
          <div className="clients-track">
            <div className="clients-element">
              <object className="logo-image" data={aro}>
                aro logo
              </object>
            </div>
            <div className="clients-element">
              <img
                className="logo-image"
                src={burdines}
                alt="burdines logo"
              ></img>
            </div>
            <div className="clients-element">
              <img className="logo-image" src={cfx} alt="cfx logo"></img>
            </div>
            <div className="clients-element">
              <img className="logo-image" src={conley} alt="conley logo"></img>
            </div>
            <div className="clients-element">
              <img className="logo-image" src={mannen} alt="mannen logo"></img>
            </div>

            <div className="clients-element">
              <img className="logo-image" src={navin} alt="navin logo"></img>
            </div>
            <div className="clients-element">
              <img className="logo-image" src={nike} alt="nike logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clients;
