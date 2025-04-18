import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingHooks();


  return (
    <div>
      Browse Page is here
      <MainContainer />
      <SecondaryContainer/>
      <Header />
    </div>
  );
};

export default Browse;
