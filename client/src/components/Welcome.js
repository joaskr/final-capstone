import React from "react";
function Welcome(props) {
  return (
    <div id="welcome" className="welcome-section">
      <div className="welcome-section-content">
        <h2>{props.header}</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default Welcome;
