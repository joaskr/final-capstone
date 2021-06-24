import React, { useState, useEffect } from "react";

const Synflood = () => {
  const [synData, setSynData] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3001/synflood")
      .then((res) => res.json())
      .then((res) => setSynData([...res]));
    console.log(synData);
  }, [visible]);
  const getData = () => {
    setVisible(true);
  };
  const headers = ["File", "Time", "Count", "Source", "Source_Mac", "Info"];
  return (
    <div>
      <button onClick={getData}>Load data</button>
      {visible && (
        <table style={{ width: 500 }}>
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {synData.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{elem.File}</td>
                  <td>{elem.Time}</td>
                  <td>{elem.Count}</td>
                  <td>{elem.Source}</td>
                  <td>{elem.Source_Mac}</td>
                  <td>{elem.Info}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Synflood;
