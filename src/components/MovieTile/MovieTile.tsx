import React from "react";
import { Description, MovieItem, Poster, Title } from "./styles";

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
      <Poster src={poster} alt={`poster ${title}`} />
      <Title>{title}</Title>
      <Description>
        {type} ☉ {year}
      </Description>
    </MovieItem>
  );
};
