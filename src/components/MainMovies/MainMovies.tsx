import { useEffect } from "react";
import { getMovies } from "store/selectors/movieSelectors";
import { Loading, MovieTile } from "..";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { MovieList, Error } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const MainMovies = ({ movie }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies(movie));
  }, [dispatch, movie]);

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
          slidesPerView={4}
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
          {/* <SwiperSlide>
            <NextButton type="button" onClick={clickHandler}>
              <ArrowRight />
            </NextButton>
          </SwiperSlide> */}
        </Swiper>
      </MovieList>
    </>
  );
};
