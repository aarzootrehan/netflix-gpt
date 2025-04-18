import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  console.log("movies ss", movies);

  if (movies === null || movies === undefined) return null;

  let firstMovie = movies[0];

  let { original_title, overview, id } = firstMovie;

  return (
    <div>
      <VideoTitle title={original_title} 
      overview={overview}
      id={id} />
    </div>
  );
};

export default MainContainer;
