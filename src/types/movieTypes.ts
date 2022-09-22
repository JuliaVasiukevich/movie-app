export interface IMovieAPI {
  Response: boolean;
  Search: IMovieSearchAPI[];
  totalResults: number;
}

export interface IMovieSearchAPI {
  Poster: string | undefined;
  Title: string | undefined;
  Type: string | undefined;
  Year: string | undefined;
  imdbID: string;
}


export interface IMovieDetails {
  Title?:string,
  Year?:string,
  Released?:string,
  Runtime?:string,
  Genre?:string,
  Director?:string,
  Writer?:string,
  Actors?:string,
  Plot?:string,
  Language?:string,
  Awards?:string,
  Poster?:string,
  Ratings?:IRating[],
  Country: string,
  Metascore?:string
  imdbRating?:string,
  imdbVotes?:string,
  imdbID?:string,
  Type?:string,
  DVD?:string,
  BoxOffice?:string,
  Production?: string,
}

interface IRating {
  Source: string,
  Value:string
}