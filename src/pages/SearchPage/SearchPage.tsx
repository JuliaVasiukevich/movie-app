import { Filters, MovieTile } from "components";
import { useEffect, useState } from "react";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { clearMovieArray } from "store/features/movieSearchSlice";
import { IMovieSearch } from "types/movieTypes";
import { fetchMoviesSearch } from "../../store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { Error, Wrapper, ErrorWrapper, FilterContainer, ErrorFilterContainer } from "./styles";
import { ParamsList } from "components/ParamsList/ParamsList";
import { Ghost } from "react-kawaii";
import { motion } from "framer-motion";
import { Color } from "ui/colors";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { error, moviesSearch, params, movieArray } = useAppSelector(getMoviesSearch);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    dispatch(clearMovieArray());
    setPage(1);
    setFetching(true);
  }, [params.title, params.filters.year, params.filters.type]);

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchMoviesSearch({
          title: params.title,
          page: page,
          filters: { year: params.filters.year, type: params.filters.type },
        }),
      );

      setPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const maxPages = +moviesSearch.totalResults / 10;

  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        window.innerHeight <
        1 &&
      page < maxPages
    ) {
      setFetching(true);
    }
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (error) {
    return (
      <>
        <ErrorWrapper>
          <ParamsList />
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.2,
              repeatType: "reverse",
            }}
          >
            <Ghost size={200} mood="sad" color={Color.Primary} />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
          >
            <Error>Ooopps! No results!</Error>
          </motion.div>
        </ErrorWrapper>
        <ErrorFilterContainer>
          <Filters />
        </ErrorFilterContainer>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <ParamsList />
        {movieArray.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
          return (
            <MovieTile
              key={imdbID}
              title={title}
              poster={poster}
              type={type}
              year={year}
              imdbID={imdbID}
            />
          );
        })}
      </Wrapper>
      <FilterContainer>
        <Filters />
      </FilterContainer>
    </>
  );
};
