import { MovieTile } from "components";
import { useAppSelector, getTrends } from "store";
import { TrendsStyled } from "./styles";

export const TrendsPage = () => {
  const { trends } = useAppSelector(getTrends);

  return (
    <TrendsStyled>
      {trends.map((movie) => {
        return <MovieTile key={movie.imdbID} {...movie} />;
      })}
    </TrendsStyled>
  );
};
