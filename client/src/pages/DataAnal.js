import React, { useState } from "react";
import Nav from "../components/Nav";
import { Redirect } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import { SegmentedControl } from "segmented-control";
import Synflood from "../components/Synflood";
import Arp from "../components/Arp";
import ZipThread from "../components/ZipThread";

function DataAnal() {
  const [activePage, setActivePage] = useState("arp");
  const { loggedIn } = useAuth();
  let dataContent;
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  if (activePage === "arp") {
    dataContent = <Arp />;
  } else if (activePage === "syn") {
    dataContent = <Synflood />;
  } else {
    dataContent = <ZipThread />;
  }
  return (
    <div className="DataAnal">
      <Nav></Nav>
      <div className="buttons">
        <SegmentedControl
          name="oneDisabled"
          options={[
            { label: "Arp poison", value: "arp", default: true },
            { label: "Syn flood", value: "syn" },
            { label: "Zip threat", value: "zip" },
          ]}
          setValue={(newValue) => setActivePage(newValue)}
          style={{ width: 400, color: "#a53f52" }}
        />
      </div>
      {dataContent}
    </div>
  );
}
export default DataAnal;
