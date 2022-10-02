import { adaptedIMovie } from "mappers/mappers";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "services/movieAPI";
import { IMovie, IMovieSearch } from "types/movieTypes";

interface MoviesState {
  moviesSearch: IMovie;
  isLoading: boolean;
  error: null | string;
  params: IParams;
  movieArray: IMovieSearch[];
}

export interface IParams {
  title: string;
  page: number;
  filters: IFilters;
}

export enum FilterKeys {
  TYPE = "type",
  YEAR = "year",
}

export interface IFilters {
  [FilterKeys.TYPE]?: string;
  [FilterKeys.YEAR]?: number;
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
    page: 1,
    filters: {}
  },
  movieArray: [],
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
    addToSearch(state, { payload }: PayloadAction<string>) {
      state.params.title = payload;
    },
    clearMovieArray(state) {
      state.movieArray = [];
    },
    addYear(state, { payload }: PayloadAction<number>) {
      state.params.filters.year = payload;
    },
    addType(state, { payload }: PayloadAction<string>) {
      state.params.filters.type = payload;
    },
    deleteFilter(state, { payload }: PayloadAction<FilterKeys>) {
      delete state.params.filters[payload];
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
      state.movieArray.push(...payload.search);
    });
    builder.addCase(fetchMoviesSearch.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default moviesSearchSlice.reducer;

export { fetchMoviesSearch };

export const { addToSearch, clearMovieArray, addYear, addType,
  deleteFilter } = moviesSearchSlice.actions;
