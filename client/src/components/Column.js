import React from "react";
function Column(props) {
  return (
    <div className="column">
      <h3 className="big-stat">{props.stat}</h3>
      <p className="stat-desc">{props.desc}</p>
    </div>
  );
}
export default Column;
