import { Loading } from "components";
import { MainMovies } from "components/MainMovies/MainMovies";
import { MovieWrapper } from "pages/DetailsMoviePage/styles";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors/movieSelectors";
import { StyledList, Error } from "./styles";

export const MainCategories = () => {
  const movieArray = [
    "batman",
    "love",
    "superman",
    "hospital",
    "ted",
    "myths",
    "adventure",
    "story",
    "legend",
    "star wars",
    "money",
    "family",
    "simpsons",
    "USA",
    "galaxy",
    "ring",
    "sport",
  ];
  const [categories, setCategories] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [fetching, setFetching] = useState(true);

  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    if (fetching) {
      setCategories([...categories, movieArray[count], movieArray[count + 1]]);
      dispatch(fetchMovies(movieArray[count]));
      dispatch(fetchMovies(movieArray[count + 1]));
      setCount((prevState) => prevState + 2);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = function (e: any) {
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
        1 &&
      categories.length < movieArray.length - 1
    ) {
      setFetching(true);
    }
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (error) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <>
      {categories.map((category) => {
        return (
          <StyledList>
            <li key={category}>
              <h1> About {category}</h1>
              <MainMovies movies={movies?.[category]?.Search} />
            </li>
          </StyledList>
        );
      })}
    </>
  );
};
