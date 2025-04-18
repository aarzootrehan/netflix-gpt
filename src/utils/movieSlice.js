import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing movie data in the Redux store.
 * @typedef {Object} MovieSlice
 */
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  },
});

export const { addMovie, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
