import React from "react";
import videoFile from "../assets/Smishing.mp4";
function Video() {
  return (
    <div className="video-section">
      <video height="510" controls>
        <source src={videoFile} type="video/mp4"></source>
      </video>
    </div>
  );
}
export default Video;
