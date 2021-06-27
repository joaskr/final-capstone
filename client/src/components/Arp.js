import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

const Arp = () => {
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
    await fetch("/arppoison")
      .then((res) => {
        return res.json();
      })
      .then((data) => setSynData([...data]));
  }
  const headers = ["File", "Time", "Source Mac", "Info"];
  return (
    <div className="data-content">
      <div className="data-table">
        <button className="form-control-button" onClick={getData}>
          Load data
        </button>
        {visible && (
          <div className="table-inside">
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
                    This is the name of the file you sent us.
                  </ReactTooltip>
                  <ReactTooltip id="1" place="top" effect="solid">
                    This is the time of a possible attack.
                  </ReactTooltip>
                  <ReactTooltip id="2" place="top" effect="solid">
                    This is a MAC address of a possible attacker.
                  </ReactTooltip>
                  <ReactTooltip id="3" place="top" effect="solid">
                    This is additional information abut the packet.
                  </ReactTooltip>
                </thead>
                <tbody>
                  {synData.map((elem, index) => {
                    return (
                      <tr key={index}>
                        <td>{elem.File}</td>
                        <td>{elem.Time}</td>
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
        <h2 className="clients-section-text">ARP poisoning attack</h2>
        <span className="horizontal-line">
          <hr></hr>
        </span>
        <article>
          <h3>What's an ARP poisoning attack?</h3>
          <p>
            An attacker sends malicious ARP packets in your network in order to
            change the pairings in the IP to MAC tables. ARP Protocol translates
            IP addresses into MAC addresses.
          </p>
        </article>
        <article>
          <h3>Why should I be worried?</h3>
          <p>
            Once the default gateway has received this false ARP message and
            broadcasts its changes to all other devices on the network, all of
            your traffic to any other device on the network travels through the
            attacker's computer, allowing the attacker to inspect or modify it
            before forwarding it to its real destination.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Arp;
