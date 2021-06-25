import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

const ZipThread = () => {
  const [synData, setSynData] = useState(false);
  const [visible, setVisible] = useState(false);
  const [length, setLength] = useState(0);
  useEffect(() => {
    fetchData();
    if (Array.isArray(synData)) {
      setLength(synData.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, length]);
  const getData = () => {
    setVisible(true);
  };
  async function fetchData() {
    await fetch("http://localhost:3001/zipthread")
      .then((res) => {
        return res.json();
      })
      .then((data) => setSynData([...data]));
  }
  const headers = ["File", "Time", "Source", "Source Mac", "Info"];
  return (
    <div className="data-content">
      <div className="data-table">
        <button className="form-control-button" onClick={getData}>
          Load data
        </button>
        {visible && (
          <div>
            <h3>Found {length} possible threat&#40;s&#41;</h3>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    {headers.map((head, index) => (
                      <th data-tip data-for={index} id={index} key={index}>
                        {head}
                      </th>
                    ))}
                  </tr>
                  <ReactTooltip id="0" place="top" effect="solid">
                    Lorem ipsum
                  </ReactTooltip>
                  <ReactTooltip id="1" place="top" effect="solid">
                    Lorem ipsum 1
                  </ReactTooltip>
                  <ReactTooltip id="2" place="top" effect="solid">
                    Lorem ipsum 2
                  </ReactTooltip>
                  <ReactTooltip id="3" place="top" effect="solid">
                    Lorem ipsum 3
                  </ReactTooltip>
                  <ReactTooltip id="4" place="top" effect="solid">
                    Lorem ipsum 4
                  </ReactTooltip>
                </thead>
                <tbody>
                  {synData.map((elem, index) => {
                    return (
                      <tr key={index}>
                        <td>{elem.File}</td>
                        <td>{elem.Time}</td>
                        <td>{elem.Source}</td>
                        <td>{elem.Source_Mac}</td>
                        <td>{elem.Info}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <span className="data-vertical-line"></span>
      <div className="data-info">
        <h2 className="clients-section-text">.zip file threat</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <article>
          <h3>What's a .zip file threat?</h3>
          <p>
            .zip files can contain viruses, trojans, and other malware, because
            putting the malware into a compressed archive is an easy way of
            bypassing your anti-virus/ anti-malware software until the archive
            is decompressed. Then the malware is extracted and infects the host.
          </p>
        </article>
        <article>
          <h3>Why should I be worried?</h3>
          <p>
            There is also a threat of zip bomb; which is a malicious archive
            file designed to crash or render useless the program or system
            reading it. It is often used to disable antivirus software, in order
            to create an opening for more traditional viruses.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ZipThread;
