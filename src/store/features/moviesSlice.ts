import { movieAPI } from "../../services/movieAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovieAPI } from "types/movieTypes";

interface MoviesState {
  movies: { [title: string]: IMovieAPI };
  isLoading: boolean;
  error: null | string;
}

const initialState: MoviesState = {
  movies: {},
  isLoading: false,
  error: null,
};

const fetchMovies = createAsyncThunk<IMovieAPI, string>(
  "movies/fetchMovies",
  async (title: string) => {
    return await movieAPI.getByTitle(title);
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload, meta }) => {
      state.isLoading = false;
      state.movies[meta.arg] = payload;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default moviesSlice.reducer;

export { fetchMovies };
