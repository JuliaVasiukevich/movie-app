import { useEffect } from "react";
import { getMovies } from "store/selectors/movieSelectors";
import { Loading, MovieTile } from "..";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { MovieList, Error } from "./styles";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "hooks";
import { IMovieSearch } from "types/movieTypes";
import { getNumderOfSlides } from "utils";

interface IProps {
  movieTitle: string
}

export const Recommended = ({ movieTitle }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);
  const { width } = useWindowSize();

  useEffect(() => {
    dispatch(fetchMovies(movieTitle));
  }, [dispatch, movieTitle]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <>
      <MovieList>
        <Swiper
          slidesPerView={getNumderOfSlides(width)}
          spaceBetween={0}
          freeMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {movies?.[movieTitle]?.search.map(
            ({ imdbID, title, poster, type, year }: IMovieSearch) => {
              return (
                <SwiperSlide>
                  <MovieTile
                    key={imdbID}
                    title={title}
                    poster={poster}
                    type={type}
                    year={year}
                    imdbID={imdbID}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </MovieList>
    </>
  );
};
