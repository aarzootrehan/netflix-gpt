import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing movie data in the Redux store.
 * @typedef {Object} MovieSlice
 */
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    }
  },
});

export const { addMovie, addTrailerVideo, addPopularMovie } = movieSlice.actions;
export default movieSlice.reducer;
