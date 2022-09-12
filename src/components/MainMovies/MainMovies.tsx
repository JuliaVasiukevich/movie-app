import React, { useEffect, useState } from "react";
import { Loading, MovieTile } from "..";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { MovieList } from "./styles";

export const MainMovies = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector((state) => state.movies);
  const clickHandler = () => {
   
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>About Batman</h1>
      <MovieList>
        {movies.Search.map((movie) => {
          return (
            <MovieTile
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
            ></MovieTile>
          );
        })}
      </MovieList>
      <button type="button" onClick={clickHandler}>
        next
      </button>
    </>
  );
};
