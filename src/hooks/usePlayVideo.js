import { useEffect, useState } from "react";
import { GET_FETCH_VIDEO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const usePlayVideo = (movieId) => {
  let dispatch = useDispatch();

  const fetchVideo = async () => {
    const url = GET_FETCH_VIDEO_URL(movieId);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env.TMDB_TOKEN}`
      },
    };

    const data = await fetch(url, options);
    const json = await data.json();
    const tlVideo = json.results.find((video) => video.type === "Trailer");
    let tlVideos = tlVideo.length === 0 ? json.results[0]: tlVideo
    dispatch(addTrailerVideo(tlVideos.key));
  };

  useEffect(() => {
    fetchVideo();
  }, [movieId]);

};

export default usePlayVideo;
