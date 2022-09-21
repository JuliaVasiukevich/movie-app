import { IMDbLogo } from "assets";
import { Loading, MainMovies } from "components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieAPI } from "services/movieAPI";
import { addToFavotires } from "store/features/favoritesSlice";
import { fetchMovieByDetails } from "store/features/moviesDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getDetailsMovie } from "store/selectors/movieDetailsSelectors";
import { IMovieDetails, IMovieSearchAPI } from "types/movieTypes";
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
} from "./styles";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsMovie);
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
    Language,
    imdbRating,
    BoxOffice,
    Genre,
    Type,
    Country,
    Production,
  } = details || ({} as IMovieDetails);

  const movie: IMovieSearchAPI = {
    Poster: Poster,
    Title: Title,
    Type: Type,
    Year: Year,
    imdbID: imdbID,
  };
//TODO флгоритм для рекомендаций
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
  //   .then((res) => {});

  const recommended = Title?.split(" ")[0];

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(movie);

  return (
    <Wrapper>
      <ImgWrapper>
        <PosterImg src={Poster} alt={`poster ${Title}`} />
        <FavoritesButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(addToFavotires(movie));
            console.log(movie);
          }}
        >
          like
        </FavoritesButton>
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
          <p></p> <p></p>
          <p>Year</p> <p>{Year}</p>
          <p>Released</p> <p>{Released}</p>
          <p>BoxOffice</p> <p>{BoxOffice}</p>
          <p>Country</p> <p>{Country}</p>
          <p>Actors</p> <p>{Actors}</p>
          <p>Director</p> <p>{Director}</p>
          <p>Writer</p> <p>{Writer}</p>
        </DataGrid>
        <h2>Recommended:</h2>
        <MainMovies movie={`${recommended}`}></MainMovies>
      </DescriptionWrapper>
    </Wrapper>
  );
};
