import React from "react";

const Divided = (props) => {
  return (
    <div className={props.class}>
      <div className="divided-pic-div"></div>
      <div className="divided-text-div">
        <h2 className="divided-text">{props.title}</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default Divided;
