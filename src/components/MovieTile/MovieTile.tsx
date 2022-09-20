import React, { useEffect } from "react";
import { addToFavotires } from "store/features/favoritesSlice";
import { fetchMovies } from "store/features/moviesSlice";
import { useAppDispatch } from "store/hooks/hooks";
import { Description, MovieItem, Poster, Title } from "./styles";

interface IProps {
  title: string;
  poster: string;
  type: string;
  year: string;
}
//TODO сделать через стайлд-компонентс
export const MovieTile = ({ title, poster, type, year }: IProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies("a"));
  }, [dispatch]);

  return (
    <MovieItem>
      <Poster src={poster} alt={`poster ${title}`} />
      <Title>{title}</Title>
      <Description>
        {type} ☉ {year}
      </Description>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToFavotires(movie));
        }}
      >
        ❤️
      </button>
    </MovieItem>
  );
};
