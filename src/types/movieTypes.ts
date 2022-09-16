export interface IMovieAPI {
  Response: boolean;
  Search: IMovieSearchAPI[];
  totalResults: number;
}

export interface IMovieSearchAPI {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
