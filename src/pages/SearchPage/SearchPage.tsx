import { Filters, MovieTile } from "components";
import { useEffect, useState } from "react";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { clearMovieArray } from "store/features/movieSearchSlice";
import { IMovieSearch } from "types/movieTypes";
import { fetchMoviesSearch } from "../../store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { Error, Wrapper, ErrorWrapper } from "./styles";
import { ParamsList } from "components/ParamsList/ParamsList";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { error, moviesSearch, params, movieArray } = useAppSelector(getMoviesSearch);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    dispatch(clearMovieArray());
    setPage(1);
    setFetching(true);
  }, [params.title, params.filters.year]);

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchMoviesSearch({
          title: params.title,
          page: page,
          filters: { year: params.filters.year },
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

  const handleScroll = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
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
      <ErrorWrapper>
        <ParamsList />
        <Error> Sorry :( </Error>
      </ErrorWrapper>
    );
  }

  return (
    <>
      <ParamsList />
      <Wrapper>
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
      <Filters />
    </>
  );
};
