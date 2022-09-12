import { MainMovies } from "components/MainMovies/MainMovies";
import React, { useEffect, useState } from "react";

export const MainCategories = () => {
  const movieArray = [
    "batman",
    "love",
    "superman",
    "hospital",
    "ted",
    "myths",
    "adventure",
  ];
  const [scrollY, setScrollY] = useState(0);

  //Это я триггерю, когда доходит до конца страницы. Идея такая: сразу буду доставать 2 элемента из массива, после того, как дойду до конца страницы еще 2, пока не дойду до конца массива с темами
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    setScrollY(window.scrollY);

    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      1
    ) {
      console.log("Bottom");
    }
  };

  return (
    <>
      {movieArray.map((movie) => {
        return (
          <li>
            <h1> About {movie}</h1>
            <MainMovies movie={movie}></MainMovies>
          </li>
        );
      })}
    </>
  );
};
