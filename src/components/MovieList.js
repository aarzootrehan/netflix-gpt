import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className="movie-list-container">
      <h1>{title}</h1>

        <div className="flex z-10">
        {movies && movies.length > 0 && movies.map((movie) => {
            return (
                <MovieCard
                key={movie.id}
                movie={movie}
                />
            )
        })}
        </div>
     
    </div>
  )
}

export default MovieList
