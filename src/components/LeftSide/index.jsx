import React from "react";
import styles from "./LeftSide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../../API.jsx";

function LeftSide({ movies, selectedMovie, setSelectedMovie }) {
  return (
    <div className="left-side">
      <Swiper
        effect={"cards"}
        onSlideChange={(slide) => setSelectedMovie(movies[slide.activeIndex])}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              {({ isActive }) => {
                isActive && setSelectedMovie(movie);
                return (
                  <div className="sp-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt=""
                    />
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default LeftSide;
