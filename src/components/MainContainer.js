import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  if (movies === null || movies === undefined) return null;

  let firstMovie = movies[0];

  let { original_title, overview, id } = firstMovie;

  return (
    <div className="bg-black">
      <VideoTitle title={original_title} 
      overview={overview}
      id={id} />
    </div>
  );
};

export default MainContainer;
