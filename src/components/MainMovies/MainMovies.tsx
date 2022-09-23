import { useEffect } from "react";
import { getMovies } from "store/selectors/movieSelectors";
import { Loading, MovieTile } from "..";
import { fetchMovies } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { MovieList } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "hooks";

export const MainMovies = ({ movies }: any) => {
  const { width } = useWindowSize();

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

  return (
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
        {movies?.map((movie: any) => {
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
  );
};
