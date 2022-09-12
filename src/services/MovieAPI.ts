import axios from "axios";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getByTitle(title: string) {
    const params = {
      s: title,
      page: 1,
    };

    const { data } = await this.API.get("", { params });

    return data;
  }
}

export const movieAPI = new MovieAPI();
