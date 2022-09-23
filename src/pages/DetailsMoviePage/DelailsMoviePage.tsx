import { IMDbLogo } from "assets";
import { Loading, Recommended } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFavotires, removeFavorite } from "store/features/favoritesSlice";
import { fetchMovieByDetails } from "store/features/moviesDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { getDetailsMovie } from "store/selectors/movieDetailsSelectors";
import { IMovieDetails, IMovieSearchAPI } from "types/movieTypes";
import { BookmarkIcon, ShareIcon } from "../../assets";
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
  Description,
  DataGrid,
  MovieWrapper,
  DisFavoritesButton,
  MovieButton,
  ShareButton,
} from "./styles";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsMovie);
  const { favorites } = useAppSelector(getFavorites);

  const {
    Title,
    Year,
    Poster,
    Released,
    Runtime,
    Director,
    Writer,
    Actors,
    Plot,
    imdbRating,
    BoxOffice,
    Genre,
    Type,
    Country,
  } = details || ({} as IMovieDetails);

  const movie: IMovieSearchAPI = {
    Poster: Poster,
    Title: Title,
    Type: Type,
    Year: Year,
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
    Title?.split(" ").length !== 1
      ? `${Title?.split(" ")[0]} ${Title?.split(" ")[0]}`
      : Title?.split(" ")[0];

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const result = favorites.find((move) => move.imdbID === movie.imdbID);

  return (
    <Wrapper>
      <MovieWrapper>
        <ImgWrapper>
          <PosterImg src={Poster} alt={`poster ${Title}`} />
          <MovieButton>
            {result ? (
              <DisFavoritesButton
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeFavorite(movie?.imdbID));
                }}
              >
                <BookmarkIcon />
              </DisFavoritesButton>
            ) : (
              <FavoritesButton
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToFavotires(movie));
                }}
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
          <TypeMovie>{Genre?.split(", ").join(" • ")}</TypeMovie>
          <TitleMovie>{Title}</TitleMovie>
          <Badges>
            <BadgeIMDB>
              <IMDbLogo /> {imdbRating}
            </BadgeIMDB>
            <BadgeIMDB>{Runtime}</BadgeIMDB>
          </Badges>
          <Description>{Plot}</Description>
          <DataGrid>
            {/* TODO: почистить, сделать, чтобы не показывалось N/A */}
            <p></p> <p></p>
            <p>Year</p> <p>{Year}</p>
            <p>Released</p> <p>{Released}</p>
            <p>BoxOffice</p> <p>{BoxOffice}</p>
            <p>Country</p> <p>{Country}</p>
            <p>Actors</p> <p>{Actors}</p>
            <p>Director</p> <p>{Director}</p>
            <p>Writer</p> <p>{Writer}</p>
          </DataGrid>
        </DescriptionWrapper>
      </MovieWrapper>
      <h2>Recommended:</h2>
      <Recommended movie={`${recommended}`}></Recommended>
    </Wrapper>
  );
};
