import { ArrowRight } from "assets";
import { useEffect} from "react";
import { getMovies } from "store/selectors/movieSelectors";
import { Loading, MovieTile } from "..";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { MovieList, NextButton } from "./styles";

export const MainMovies = ({ movie }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  const clickHandler = () => {};

  // Это я хочу триггернуть для того, чтобы прокручивать дальше для конкретной категории, 
  //но пока как-то слабо, попробую сделать, присоеденив свайпер вместо кнопки

  //   const [ref, width] = useElementWidth();
  //   console.log("current width: ", width);

  useEffect(() => {
    dispatch(fetchMovies(movie));
  }, [dispatch, movie]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <MovieList>
        {movies?.[movie]?.Search.map((movie: any) => {
          return (
            <MovieTile
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
            />
          );
        })}
        <NextButton type="button" onClick={clickHandler}>
          <ArrowRight />
        </NextButton>
      </MovieList>
    </>
  );
};
