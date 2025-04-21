import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies();
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

  return (
    <div>
      Browse Page is here
      <Header />
      {gptSearch ? (
        <>Hiii
        <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
