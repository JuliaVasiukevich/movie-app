import { IMovieSearchAPI } from "./../../types/movieTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IMovieSearchAPI[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieSearchAPI>) {
      state.favorites.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.imdbID !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;