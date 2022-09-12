import { movieAPI } from "./../../services/MovieAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: { [title: string]: IMovie };
  isLoading: boolean;
  error: null | string;
}

interface IMovie {
  Response: boolean;
  Search: IMovieSearch[];
  totalResults: number;
}

export interface IMovieSearch {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const initialState: MoviesState = {
  movies: {},
  isLoading: false,
  error: null,
};

const fetchMovies = createAsyncThunk<IMovie, string>(
  "movies/fetchMovies",
  async (title: string) => movieAPI.getByTitle(title)
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
