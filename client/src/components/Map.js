import React from "react";
import { Map, Marker } from "pigeon-maps";

function MapComp() {
  return (
    <div className="map-div">
      <Map
        height={600}
        defaultCenter={[44.07252113003659, -111.45080644608376]}
        defaultZoom={15}
      >
        <Marker width={50} anchor={[44.07293737343675, -111.43454153375505]} />
      </Map>
    </div>
  );
}
export default MapComp;
