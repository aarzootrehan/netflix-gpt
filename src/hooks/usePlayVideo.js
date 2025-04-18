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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjVlNTQxYjUxNjQ5ZDQ5ZWY2NmRmNTcwMWYzYzAwZCIsIm5iZiI6MTc0NDk2MTIxMi4wNjMsInN1YiI6IjY4MDFmZWJjZTQ3NTM0MjVlZmFkMjgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lfkREJirWXLqVwkhSXYjV6A53WTh-vK4f9ibJolSFUs",
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
