import { POPULAR_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = POPULAR_MOVIE_URL;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
       Authorization: `Bearer ${process.env.TMDB_TOKEN}`
      },
    };
    const data = await fetch(url, options);
    const json = await data.json();
    console.log("popuplar movies", json.results);
    console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default usePopularMovies;
