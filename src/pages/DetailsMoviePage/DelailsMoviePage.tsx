import { Loading, Recommended } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFavotires, removeFavorite } from "store/features/favoritesSlice";
import { fetchMovieByDetails } from "store/features/moviesDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { getDetailsMovie } from "store/selectors/movieDetailsSelectors";
import { IMovieDetails, IMovieSearch } from "types/movieTypes";
import { BookmarkIcon, ShareIcon, IMDbLogo } from "../../assets";
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
  MovieWrapper,
  DisFavoritesButton,
  MovieButton,
  ShareButton,
  MovieTrendsIcon,
  DataName,
  DataValue,
} from "./styles";
import { getUserInfo } from "store/selectors/userSelectors";
import { getTrends } from "store/selectors/trendsSelectors";
import { addToTrends } from "store/features/trendsSlice";
import { recommended } from "utils/recommended";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsMovie);
  const { favorites } = useAppSelector(getFavorites);
  const { trends } = useAppSelector(getTrends);
  const { isAuth } = useAppSelector(getUserInfo);

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
    poster: poster,
    title: title,
    type: type,
    year: year,
    imdbID: imdbID,
  };

  const isFavorites = favorites.find((newMovie) => newMovie.imdbID === movie.imdbID);

  const isTrends = trends.find((trendMovie: any) => trendMovie.imdbID === imdbID);

  if (+imdbRating > 7 && +year > 2017) {
    dispatch(addToTrends(movie));
  }

  const handleDeleteFavorites = (e: any, ID: any) => {
    e.preventDefault();
    dispatch(removeFavorite(ID));
  };

  const handleAddFavorites = (e: any, ID: any) => {
    e.preventDefault();
    dispatch(addToFavotires(movie));
  };

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  const addDefaultSrc = (ev: any) => {
    ev.target.src =
      "https://encrypted-tbn0.gstatic.com/" +
      "images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Wrapper>
      <MovieWrapper>
        <ImgWrapper>
          {isTrends && <MovieTrendsIcon />}
          <PosterImg src={poster} onError={addDefaultSrc} alt={`poster ${title}`} />
          <MovieButton>
            {isFavorites ? (
              <DisFavoritesButton onClick={(e) => handleDeleteFavorites(e, movie.imdbID)}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <BookmarkIcon />
                </motion.div>
              </DisFavoritesButton>
            ) : (
              <FavoritesButton
                disabled={!isAuth}
                onClick={(e) => handleAddFavorites(e, movie.imdbID)}
              >
                <BookmarkIcon />
              </FavoritesButton>
            )}
            <ShareButton>
              <ShareIcon />
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
                  <>
                    <DataName>{field}</DataName> <DataValue>{value}</DataValue>
                  </>
                );
              }
            })}
          </DataGrid>
        </DescriptionWrapper>
      </MovieWrapper>
      <h2>Recommended:</h2>
      <Recommended movie={`${recommended(title)}`} />
    </Wrapper>
  );
};
