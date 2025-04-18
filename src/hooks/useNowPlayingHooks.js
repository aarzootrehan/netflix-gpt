import { MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { useEffect, useState } from "react";


const useNowPlayingHooks = () => {
    const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);

  const fetchData = async () => {
    const url = MOVIE_URL;
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
    console.log(json.results);
    dispatch(addMovie(json.results));
    setMovieList(json.results);
};

useEffect(() => {
    fetchData();
  }, []);
}

export default useNowPlayingHooks;