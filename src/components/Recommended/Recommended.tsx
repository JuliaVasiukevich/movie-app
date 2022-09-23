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
          {movies?.[movie]?.Search.map((movie: any) => {
            return (
              <SwiperSlide>
                <MovieTile
                  key={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  type={movie.Type}
                  year={movie.Year}
                  imdbID={movie.imdbID}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MovieList>
    </>
  );
};
