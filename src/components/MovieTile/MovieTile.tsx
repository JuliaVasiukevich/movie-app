import { Link } from "react-router-dom";
import { IMovieSearch } from "types/movieTypes";
import { Description, MovieItem, Poster, Title, MovieTrendsIcon } from "./styles";
import { motion } from "framer-motion";
import { useAppSelector } from "store/hooks/hooks";
import { getTrends } from "store/selectors/trendsSelectors";

export const MovieTile = ({ title, poster, type, year, imdbID }: IMovieSearch) => {
  const { trends } = useAppSelector(getTrends);
  const isTrends = trends.find((trendMovie) => trendMovie.imdbID === imdbID);

  const addDefaultSrc = (ev: any) => {
    ev.target.src =
      "https://encrypted-tbn0.gstatic.com/" +
      "images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MovieItem>
        <Link to={`/movies/${imdbID}`}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <>
              {isTrends && <MovieTrendsIcon />}
              <Poster src={poster} onError={addDefaultSrc} alt={`poster ${title}`} />
            </>
          </motion.div>
          <Title>{title}</Title>
          <Description>
            {type} ☉ {year}
          </Description>
        </Link>
      </MovieItem>
    </motion.div>
  );
};
