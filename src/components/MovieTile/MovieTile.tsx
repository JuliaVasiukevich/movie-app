import React from "react";
import { MovieItem, Poster } from "./styles";

interface IProps {
  title: string;
  poster: string;
  type: string;
  year: string;
}
//TODO сделать через стайлд-компонентс
export const MovieTile = ({ title, poster, type, year }: IProps) => {
  return (
    <MovieItem>
      <Poster src={poster} alt="poster" />
      <h4>{title}</h4>
      <p>
        {type} ☉ {year}
      </p>
    </MovieItem>
  );
};
