import { adaptedIMovie } from "mappers/mappers";
import axios from "axios";
import { IMovie, IMovieAPI, IMovieDetailsAPI, Param } from "types/movieTypes";
import { IParams } from "store/features/movieSearchSlice";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getByTitle(title: string): Promise<IMovieAPI> {
    const params = {
      [Param.Search]: title,
      [Param.Page]: 1,
    };

    const { data } = await this.API.get<IMovieAPI>("", { params });
    return data;
  }

  public async getByFilters(filters: IParams): Promise<IMovieAPI> {
    const params = {
      [Param.Search]: filters.title,
      [Param.Page]: 1,
    };

    const { data } = await this.API.get<IMovieAPI>("", { params });
    return data;
  }

  public async getDetailsByID(imdbID: string) {
    const params = {
      i: imdbID
    };
    const { data } = await this.API.get<IMovieDetailsAPI>("", {
      params
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
