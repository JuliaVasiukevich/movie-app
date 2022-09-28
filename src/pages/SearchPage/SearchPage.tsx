import { Loading, MovieTile } from "components";
import { useEffect } from "react";
import { getMovies } from "store/selectors/movieSelectors";
import { IMovieSearch } from "types/movieTypes";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { Error } from "./styles";

export const SearchPage = ({ movie }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies(movie));
  }, [dispatch, movie]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <>
      {movies?.[movie]?.search.map(({imdbID, title, poster, type, year}: IMovieSearch) => {
        return (
          <MovieTile
            key={imdbID}
            title={title}
            poster={poster}
            type={type}
            year={year}
            imdbID={imdbID}
          />
        );
      })}
    </>
  );
};
