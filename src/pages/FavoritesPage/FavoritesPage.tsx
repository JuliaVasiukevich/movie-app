import { EmptyFavorites } from "assets";
import { MovieTile } from "components";
import { useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { FavoritesStyled, FavoritesEmpty } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  if (favorites.length === 0) {
    return (
      <FavoritesEmpty>
        <EmptyFavorites />
      </FavoritesEmpty>
    );
  } else {
    return (
      <FavoritesStyled>
        {favorites.map((movie) => {
          return <MovieTile key={movie.imdbID} {...movie} />;
        })}
      </FavoritesStyled>
    );
  }
};
