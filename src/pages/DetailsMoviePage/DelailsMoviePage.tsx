import { Loading, Recommended } from "components";
import { MouseEvent as SyntheticEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addToFavotires,
  removeFavorite,
  fetchMovieByDetails,
  useAppDispatch,
  useAppSelector,
  getFavorites,
  getDetailsMovie,
  getTrends,
  addToTrends,
} from "store";
import { IMovieDetails, IMovieSearch } from "types/movieTypes";
import { BookmarkIcon, ShareIcon, IMDbLogo } from "assets";
import { motion } from "framer-motion";
import {
  Wrapper,
  ImgWrapper,
  PosterImg,
  FavoritesButton,
  DescriptionWrapper,
  TypeMovie,
  TitleMovie,
  Badges,
  BadgeIMDB,
  Badge,
  Description,
  DataGrid,
  GridContains,
  MovieWrapper,
  DisFavoritesButton,
  MovieButton,
  ShareButton,
  MovieTrendsIcon,
  DataName,
  DataValue,
  Error,
} from "./styles";
import { recommended, shareTelegram } from "utils";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsMovie);
  const { favorites } = useAppSelector(getFavorites);
  const { trends } = useAppSelector(getTrends);

  const {
    title,
    year,
    poster,
    released,
    runtime,
    director,
    writer,
    actors,
    plot,
    imdbRating,
    boxOffice,
    genre,
    type,
    country,
  } = details || ({} as IMovieDetails);

  const dataArray = [
    { field: "Year", value: year },
    { field: "Released", value: released },
    { field: "BoxOffice", value: boxOffice },
    { field: "Country", value: country },
    { field: "Actors", value: actors },
    { field: "Director", value: director },
    { field: "Writer", value: writer },
  ];

  const movie: IMovieSearch = {
    poster,
    title,
    type,
    year,
    imdbID,
  };

  const isFavorites = favorites.find((newMovie) => newMovie.imdbID === imdbID);
  const isTrends = trends.find((trendMovie) => trendMovie.imdbID === imdbID);

  if (+imdbRating > 7 && +year > 2017) {
    dispatch(addToTrends(movie));
  }

  const handleDeleteFavorites = () => {
    dispatch(removeFavorite(imdbID));
  };

  const handleAddFavorites = () => {
    dispatch(addToFavotires(movie));
  };

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  const addDefaultSrc = (ev: SyntheticEvent<HTMLImageElement>) => {
    ev.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/" +
      "images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Wrapper>
      <MovieWrapper>
        <ImgWrapper>
          {isTrends && <MovieTrendsIcon />}
          <PosterImg src={poster} onError={addDefaultSrc} alt={`poster ${title}`} />
          <MovieButton>
            {isFavorites ? (
              <DisFavoritesButton onClick={() => handleDeleteFavorites()}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <BookmarkIcon />
                </motion.div>
              </DisFavoritesButton>
            ) : (
              <FavoritesButton onClick={handleAddFavorites}>
                <BookmarkIcon />
              </FavoritesButton>
            )}
            <ShareButton>
              <ShareIcon onClick={shareTelegram} />
            </ShareButton>
          </MovieButton>
        </ImgWrapper>
        <DescriptionWrapper>
          <TypeMovie>{genre?.split(", ").join(" • ")}</TypeMovie>
          <TitleMovie>{title}</TitleMovie>
          <Badges>
            <BadgeIMDB $rating={+imdbRating}>
              <IMDbLogo /> {imdbRating}
            </BadgeIMDB>
            <Badge>{runtime}</Badge>
          </Badges>
          <Description>{plot}</Description>
          <DataGrid>
            {dataArray.map(({ value, field }) => {
              if (value && value !== "N/A") {
                return (
                  <GridContains key={field}>
                    <DataName>{field}</DataName> <DataValue>{value}</DataValue>
                  </GridContains>
                );
              }
              return <GridContains key={field} />;
            })}
          </DataGrid>
        </DescriptionWrapper>
      </MovieWrapper>
      <h2>Recommended:</h2>
      <Recommended movieTitle={`${recommended(title)}`} />
    </Wrapper>
  );
};
