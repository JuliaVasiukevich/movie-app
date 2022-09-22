import { MainMovies } from "components/MainMovies/MainMovies";
import { MovieWrapper } from "pages/DetailsMoviePage/styles";
import React, { useEffect, useState } from "react";
import { StyledList } from "./styles";

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

  useEffect(() => {
    if (fetching) {
      setCategories([...categories, movieArray[count], movieArray[count + 1]]);
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

  return (
    <>
      {categories.map((category) => {
        return (
          <StyledList>
            <li key={category}>
              <h1> About {category}</h1>
              <MainMovies movie={category}></MainMovies>
            </li>
          </StyledList>
        );
      })}
    </>
  );
};
