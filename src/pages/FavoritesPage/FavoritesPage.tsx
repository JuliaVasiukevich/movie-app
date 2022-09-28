import { MovieTile } from "components";
import React from "react";
import { useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { FavoritesStyled } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <FavoritesStyled>
      {favorites.map((movie: any) => {
        return <MovieTile key={movie.imdbID} {...movie}></MovieTile>;
      })}
    </FavoritesStyled>
  );
};
