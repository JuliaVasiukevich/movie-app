import { IMovieSearch } from "./../../types/movieTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITrendsState {
  trends: IMovieSearch[];
}

const initialState: ITrendsState = {
  trends: [
    {
      poster: "https://m.media-amazon.com/images/M/" +
        "MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300"
        + ".jpg",
      title: "The Batman",
      type: "movie",
      year: "2022",
      imdbID: "tt1877830"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@." +
        "_V1_SX300.jpg",
      title: "The Avengers",
      type: "movie",
      year: "2012",
      imdbID: "tt0848228"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BNDljODVmZGYtZWZkNS00NmFmLTk1OGMtNGU4YmFjNDYxZDk2XkEyXkFqcGdeQXVyNzc5MjA3OA@@." +
        "_V1_SX300.jpg",
      title: "Hello Again",
      type: "movie",
      year: "1987",
      imdbID: "tt0093175"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      title: "The Dark Knight",
      type: "movie",
      year: "2008",
      imdbID: "tt0468569"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@." +
        "_V1_SX300.jpg",
      title: "The Lord of the Rings: The Two Towers",
      type: "movie",
      year: "2002",
      imdbID: "tt0167261"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@." +
        "_V1_SX300.jpg",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      type: "movie",
      year: "2001",
      imdbID: "tt0120737"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc" +
        "4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@." +
        "_V1_SX300.jpg",
      title: "The Matrix",
      type: "movie",
      year: "1999",
      imdbID: "tt0133093"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYx" +
        "ZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@." +
        "_V1_SX300.jpg",
      title: "Batman: Under the Red Hood",
      type: "movie",
      year: "2010",
      imdbID: "tt1569923"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhN" +
        "jI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@." +
        "_V1_SX300.jpg",
      title: "Life",
      type: "movie",
      year: "2017",
      imdbID: "tt5442430"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_SX300.jpg",
      title: "The Secret Life of Walter Mitty",
      type: "movie",
      year: "2013",
      imdbID: "tt0359950"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_SX300.jpg",
      title: "The Secret Life of Pets",
      type: "movie",
      year: "2016",
      imdbID: "tt2709768"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@." +
        "_V1_SX300.jpg",
      title: "The Secret in Their Eyes",
      type: "movie",
      year: "2009",
      imdbID: "tt1305806"
    },
    {
      poster: "https://m.media-amazon.com/images/" +
        "M/MV5BYmViODUwN2YtZDk0YS00OTg4LWIyNmYtZjM1Y2EyYWIy" +
        "MmU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      title: "The Secret Garden",
      type: "movie",
      year: "1993",
      imdbID: "tt0108071"
    },
    {
      poster: "https://m.media-amazon.com/images/M/" +
        "MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg",
      title: "They Live",
      type: "movie",
      year: "1988",
      imdbID: "tt0096256"
    }
  ],
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    addToTrends(state, { payload }: PayloadAction<IMovieSearch>) {
      const result = state.trends.find((movie: any) => movie.imdbID === payload.imdbID);
      if (!result) state.trends.push(payload);
    },
  },
});

export default trendsSlice.reducer;

export const { addToTrends } = trendsSlice.actions;