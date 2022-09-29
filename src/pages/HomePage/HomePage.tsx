import { MainMovies } from "components";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors/movieSelectors";
import { StyledList, Error } from "./styles";

export const HomePage = () => {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e: any) => {
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
    <ul>
      {categories.map((category) => {
        return (
          <StyledList>
            <li key={category}>
              <h2> About {category}</h2>
              <MainMovies movies={movies?.[category]?.search} />
            </li>
          </StyledList>
        );
      })}
    </ul>
  );
};
