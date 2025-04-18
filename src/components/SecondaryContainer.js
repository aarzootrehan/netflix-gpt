import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);
  const popularMovies  = useSelector((state) => state.movies.popularMovies);

  return (
    <div className="bg-black">
      {/**Now Playing */}
      <MovieList
      title="Now Playing"
      movies={nowPlayingMovies}/>

      {/**Popular Movies */}
      <MovieList 
      title="Popular Movies"
      movies={popularMovies}/>
    </div>
  )
}

export default SecondaryContainer
