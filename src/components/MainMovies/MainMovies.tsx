import { MovieTile } from "..";
import { MovieList } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "hooks";
import { breakpoint } from "ui";
import { getNumderOfSlides } from "utils";
import { IMovieSearch } from "types/movieTypes";

export const MainMovies = ({ movies }: any) => {
  const { width } = useWindowSize();

  return (
    <MovieList>
      {width && width > breakpoint.S ? (
        <Swiper
          slidesPerView={getNumderOfSlides(width)}
          spaceBetween={1}
          freeMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {movies?.map((movie: IMovieSearch) => {
            return (
              <SwiperSlide>
                <MovieTile key={movie.imdbID} {...movie} />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <NextButton type="button" onClick={clickHandler}>
              <ArrowRight />
            </NextButton>
          </SwiperSlide> */}
        </Swiper>
      ) : (
        movies?.map((movie: IMovieSearch) => {
          return <MovieTile key={movie.imdbID} {...movie} />;
        })
      )}
    </MovieList>
  );
};
