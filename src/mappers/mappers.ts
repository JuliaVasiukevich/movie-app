import {
  IMovie, IMovieAPI,
  IMovieDetails, IMovieDetailsAPI,
  IMovieSearch, IMovieSearchAPI
} from "types/movieTypes";

export const adaptedIMovie = (movieAPI: IMovieAPI): IMovie => {
  const movie: any = {};
  if (movieAPI.Response === "True") {
    movie.response = true;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    movie.search = movieAPI.Search?.map(item => adaptedIMovieSearch(item));
    movie.totalResults = movieAPI.totalResults;
  } else {
    movie.response = false;
    // movie.error = movieAPI.Error;
  }
  return movie;
};

export const adaptedIMovieSearch = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID }: IMovieSearchAPI)
  : IMovieSearch => {
  return {
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
  };
};


export const adaptedIMovieDetails = ({
  Title,
  Year,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Awards,
  Poster,
  Country,
  Metascore,
  imdbRating,
  imdbVotes,
  imdbID,
  Type,
  DVD,
  BoxOffice,
  Production }: IMovieDetailsAPI)
  : IMovieDetails => {
  return {
    title: Title,
    year: Year,
    released: Released,
    runtime: Runtime,
    genre: Genre,
    director: Director,
    writer: Writer,
    actors: Actors,
    plot: Plot,
    language: Language,
    awards: Awards,
    poster: Poster,
    country: Country,
    metascore: Metascore,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
    imdbID: imdbID,
    type: Type,
    dvd: DVD,
    boxOffice: BoxOffice,
    production: Production,
  };
};