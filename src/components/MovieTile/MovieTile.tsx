import { Link } from "react-router-dom";
import { Description, MovieItem, Poster, Title } from "./styles";

interface IProps {
  title: string;
  poster: string;
  type: string;
  year: string;
  imdbID: string;
}
//TODO сделать через стайлд-компонентс
export const MovieTile = ({ title, poster, type, year, imdbID }: IProps) => {
  return (
    <MovieItem>
      <Link to={`/movies/${imdbID}`}>
        <Poster src={poster} alt={`poster ${title}`} />
        <Title>{title}</Title>
        <Description>
          {type} ☉ {year}
        </Description>
      </Link>
    </MovieItem>
  );
};
