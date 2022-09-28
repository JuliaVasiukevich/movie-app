import { adaptedIMovie } from "mappers/mappers";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "services/movieAPI";
import { IMovie } from "types/movieTypes";

interface MoviesState {
  moviesSearch: IMovie;
  isLoading: boolean;
  error: null | string;
  params: IParams;
}

export interface IParams {
  title: string;
  page: number;
}

// interface IMovie {
//   [title: string]: IMovieAPI;
// }

const initialState: MoviesState = {
  moviesSearch: {
    response: false,
    search: [],
    totalResults: 0
  },
  isLoading: false,
  error: null,
  params: {
    title: "",
    page: 1
  }
};



const fetchMoviesSearch = createAsyncThunk<IMovie, IParams,
  { rejectValue: string }>(
    "moviesSearch/fetchMoviesSearch",
    async (params: IParams, { rejectWithValue }) => {
      try {
        const response = await movieAPI.getByFilters(params);
        if (response.Error) {
          throw new Error(response.Error);
        }

        console.log(response)
        return adaptedIMovie(response);
      } catch (error) {
        const axiosError = error as AxiosError;

        return rejectWithValue(axiosError.message);
      }
    }
  );

const moviesSearchSlice = createSlice({
  name: "moviesSearch",
  initialState,
  reducers: {
    addToSearch(state, { payload }: PayloadAction<any>) {
      state.params.title = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoviesSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesSearch.fulfilled, (state, { payload, meta }) => {
      state.isLoading = false;
      state.moviesSearch = payload;
    });
    builder.addCase(fetchMoviesSearch.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default moviesSearchSlice.reducer;

export { fetchMoviesSearch };

export const { addToSearch } = moviesSearchSlice.actions;
