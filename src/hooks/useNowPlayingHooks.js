import { MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { useEffect, useState } from "react";


const useNowPlayingHooks = () => {
    const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  const token = process.env.TMDB_TOKEN;

  const fetchData = async () => {
    const url = MOVIE_URL;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${token}`,
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