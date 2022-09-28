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

export const Recommended = ({ movie }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);
  const { width } = useWindowSize();

  useEffect(() => {
    dispatch(fetchMovies(movie));
  }, [dispatch, movie]);

  const slides = () => {
    if (width) {
      if (width > 1500) {
        return 5;
      } else if (width > 1200) {
        return 4;
      } else if (width > 1000) {
        return 3;
      } else if (width > 600) {
        return 2;
      }
    }
    return 1;
  };

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
          slidesPerView={slides()}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {movies?.[movie]?.search.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
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
