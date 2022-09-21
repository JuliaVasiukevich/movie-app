import { MovieTile } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { removeFavorite } from "store/features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorites);

  return (
    <>
      {favorites.map((movie: any) => {
        return (
          <div key={movie.imdbID}>
            <MovieTile
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
              imdbID={movie.imdbID}
            ></MovieTile>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFavorite(movie.imdbID));
              }}
            >
              dislike
            </button>
          </div>
        );
      })}
    </>
  );
};
