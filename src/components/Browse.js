import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies();

  return (
    <div>
      Browse Page is here
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
