import React from "react";
import { Loading } from "..";
import { MovieItem } from "./styles";

interface IProps {
  title: string;
  poster: string;
  type: string;
  year: string;
}

export const MovieTile = ({ title, poster, type, year }: IProps) => {
  return (
    <MovieItem>
      <img src={poster} alt="poster" height="257px" />
      <h4>{title}</h4>
      <p>
        {type}*{year}
      </p>
    </MovieItem>
  );
};
