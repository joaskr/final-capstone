import React from "react";
import Column from "./Column";
function Columns() {
  return (
    <div className="columns-section">
      <div className="columns-section-content">
        <h2>cybersecurity in numbers</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <div className="columns-container">
          <Column
            stat="74,000"
            desc="people were affected by a data
breach in 2014 because of stolen laptops"
          ></Column>
          <span className="vertical-line"></span>
          <Column
            stat="80%"
            desc="of cybersecurity breaches are caused by human error"
          ></Column>
          <span className="vertical-line"></span>
          <Column
            stat="95%"
            desc="of companies have over 500 accounts with non-expiring passwords"
          ></Column>
          <span className="vertical-line"></span>
          <Column
            stat="60%"
            desc="of companies have over 500 accounts with non-expiring passwords"
          ></Column>
        </div>
      </div>
    </div>
  );
}
export default Columns;
