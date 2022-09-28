import { Loading, MovieTile } from "components";
import { useEffect } from "react";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { getMovies } from "store/selectors/movieSelectors";
import { IMovieSearch } from "types/movieTypes";
import { fetchMoviesSearch } from "../../store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { Error, Wrapper, ErrorWrapper } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, moviesSearch, params } = useAppSelector(getMoviesSearch);
  console.log("movies", params.title);

  const movie = params.title;

  useEffect(() => {
    dispatch(fetchMoviesSearch({ title: movie, page: 1 }));
  }, [dispatch, movie]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorWrapper>
        <Error> Sorry :( </Error>
      </ErrorWrapper>
    );
  }

console.log(moviesSearch)

  return (
    <Wrapper>
      {moviesSearch?.search.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
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
    </Wrapper>
  );
};
