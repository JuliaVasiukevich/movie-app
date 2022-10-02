import { MainMovies } from "components";
import { useEffect, useState } from "react";
import { fetchMovies } from "store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors/movieSelectors";
import { StyledList, Error, CategoryList, Title } from "./styles";

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
  const { error, movies } = useAppSelector(getMovies);

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

  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        window.innerHeight <
        1 &&
      categories.length < movieArray.length - 1
    ) {
      setFetching(true);
    }
  };

  if (error) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <CategoryList>
      {categories.map((category) => {
        return (
          <StyledList key={category}>
            <Title> About {category}</Title>
            <MainMovies movies={movies?.[category]?.search} />
          </StyledList>
        );
      })}
    </CategoryList>
  );
};
