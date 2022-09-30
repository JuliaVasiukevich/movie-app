import { MovieTile } from "components";
import React from "react";
import { useAppSelector } from "store/hooks/hooks";
import { getTrends } from "store/selectors/trendsSelectors";
import { TrendsStyled } from "./styles";

export const TrendsPage = () => {
  const { trends } = useAppSelector(getTrends);

  return (
    <TrendsStyled>
      {trends.map((movie: any) => {
        return <MovieTile key={movie.imdbID} {...movie}></MovieTile>;
      })}
    </TrendsStyled>
  );
};
