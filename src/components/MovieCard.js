import React from 'react'
import { POSTER_PATH } from '../utils/constants';

const MovieCard = ({movie}) => {
    const posterPath = POSTER_PATH + movie.poster_path;
  return (
    <div className="mr-3">
      <img src={posterPath} alt="movie-poster" className="movie-card object-cover"/>
    </div>
  )
}

export default MovieCard
