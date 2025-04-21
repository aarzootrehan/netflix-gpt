import React from "react";
import { useSelector } from "react-redux";
import usePlayVideo from "../hooks/usePlayVideo";

const VideoBackground = ({ id }) => {
  usePlayVideo(id);

  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  console.log("trailerVideo ", trailerVideo);
  return (
    <div className="aspect-ratio w-screen">
      {/**autoplay=1&**/}
      {trailerVideo && (
        <iframe
          width="97%"
          height="523"
          src={'https://www.youtube.com/embed/' + trailerVideo + '?mute=1'}
          title="And he didn&#39;t feel a thing. 👊 Get your tickets for #Novocaine now. In theatres everywhere March 14."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

/**
 *
 * <iframe width="930" height="523" src="https://www.youtube.com/embed/HayhDN2WljI" title="And he didn&#39;t feel a thing. 👊 Get your tickets for #Novocaine now. In theatres everywhere March 14." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 */
