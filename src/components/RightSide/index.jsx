import React, { useEffect } from "react";
import { getDetails } from "../../API";
import styles from "./RightSide.module.css";
import { useState } from "react";
function RightSide({ selectedMovie }) {
  const [details, setDetails] = useState();
  useEffect(() => {
    selectedMovie &&
      getDetails(selectedMovie.id).then((res) => {
        setDetails(res);
      });
  }, [selectedMovie]);

  return (
    <div>
      <div className="right-text">
        <div className="right-text-element">
          <p>Title:</p>
          <p> {selectedMovie ? selectedMovie.title : "loading.."}</p>
        </div>
        <div className="right-text-element">
          <p>IMDB:</p>
          <p> {selectedMovie ? selectedMovie.vote_average : "loading.."}/10</p>
        </div>
        <div className="right-text-element">
          <p>Running time:</p>
          <p> {details ? details.runtime : "loading.."} Minutes</p>
        </div>
        <div className="right-text-element">
          <p>Release Date:</p>
          <p> {selectedMovie ? selectedMovie.release_date : "loading.."}</p>
        </div>
        <div className="right-text-element">
          <p>Original Language:</p>
          <p>{selectedMovie ? selectedMovie.original_language : "loading.."}</p>
        </div>
        <div className="right-text-element">
          <p>Genres:</p>
          <p>
            {details
              ? details.genres.map((genre) => {
                  return genre.name + ", ";
                })
              : "loading.."}
          </p>
        </div>
        <div className="right-text-element">
          <p>Overview:</p>
          <p> {selectedMovie ? selectedMovie.overview : "loading.."}</p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
