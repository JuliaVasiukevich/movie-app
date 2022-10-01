import { IMDbLogo } from "assets";
import { Loading, Recommended } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFavotires, removeFavorite } from "store/features/favoritesSlice";
import { fetchMovieByDetails } from "store/features/moviesDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { getDetailsMovie } from "store/selectors/movieDetailsSelectors";
import { IMovieDetails, IMovieSearch } from "types/movieTypes";
import { BookmarkIcon, ShareIcon } from "../../assets";
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
} from "./styles";
import { getUserInfo } from "store/selectors/userSelectors";
import { getTrends } from "store/selectors/trendsSelectors";
import { addToTrends } from "store/features/trendsSlice";

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

  const movie: IMovieSearch = {
    poster: poster,
    title: title,
    type: type,
    year: year,
    imdbID: imdbID,
  };
  //TODO доделать алгоритм для рекомендаций

  // Promise.allSettled([
  //   movieAPI.getByTitle("The"),
  //   movieAPI.getByTitle("Lego"),
  //   movieAPI.getByTitle("Batman"),
  //   movieAPI.getByTitle("Movie"),
  // ])
  //   .then((res) => {
  //     return res
  //       .reduce((acc: any[], item) => {
  //         if (item.status === "fulfilled" && item.value.Response === "True") {
  //           acc = [...acc, ...(item.value.Search as Array<any>)];
  //         }
  //         return acc;
  //       }, [])
  //       .sort(() => {
  //         return Math.random() > 0.5 ? 1 : -1;
  //       });
  //   })
  //   .then((res) => {return res.length = 10});

  const recommended =
    title?.split(" ").length !== 1
      ? `${title?.split(" ")[0]} ${title?.split(" ")[1]}`
      : title?.split(" ")[0];

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
            {/* TODO: почистить, сделать, чтобы не показывалось N/A */}
            <p></p> <p></p>
            {year !== "N/A" && <p>Year</p>} {year !== "N/A" && <p>{year}</p>}
            <p>Released</p> <p>{released}</p>
            <p>BoxOffice</p> <p>{boxOffice}</p>
            <p>Country</p> <p>{country}</p>
            <p>Actors</p> <p>{actors}</p>
            <p>Director</p> <p>{director}</p>
            <p>Writer</p> <p>{writer}</p>
          </DataGrid>
        </DescriptionWrapper>
      </MovieWrapper>
      <h2>Recommended:</h2>
      <Recommended movie={`${recommended}`} />
    </Wrapper>
  );
};
