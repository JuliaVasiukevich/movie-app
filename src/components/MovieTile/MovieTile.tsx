import { Link } from "react-router-dom";
import { IMovieSearch } from "types/movieTypes";
import { Description, MovieItem, Poster, Title } from "./styles";
import { motion } from "framer-motion";

export const MovieTile = ({ title, poster, type, year, imdbID }: IMovieSearch) => {
  if (poster !== "N/A") {
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
              <Poster src={poster} alt={`poster ${title}`} />
            </motion.div>
            <Title>{title}</Title>
            <Description>
              {type} ☉ {year}
            </Description>
          </Link>
        </MovieItem>
      </motion.div>
    );
  } else {
    return <></>
  }
};
