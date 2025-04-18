import React from "react";
import VideoBackground from "./VideoBackground";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div
      className="video-title-container
       bg-gradient-to-b from-black to-transparent
       h-[400px] w-[930px] max-w-[930px] min-h-[400px] min-w-[930px]
       max-h-[400px]
      aspect-ratio justify-center items-start
       p-4
       absolute top-[100px] left-[20px] text-white"
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

// const video: HayhDN2WljI

export default VideoTitle;
