import React from "react";
import VideoBackground from "./VideoBackground";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div
      className="video-title-container
       bg-gradient-to-b from-black to-transparent
       
      
      aspect-ratio justify-center items-start
       p-4
       relative text-white"
    >
      <div className="absolute video-container">
        <div className="video-title">{title}</div>
        <div className="video-overview">{overview}</div>
        <div>
          <button className="play-btn">Play</button>

          <button className="info-btn">More Info</button>
        </div>
      </div>
      <VideoBackground id={id} />
    </div>
  );
};

export default VideoTitle;
