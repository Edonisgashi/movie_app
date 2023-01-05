import React, { useState } from "react";
import SelectedMovie from "./SelectedMovie";
import { Link } from "react-router-dom";
const MovieCard = ({ el }) => {
  return (
    <>
      <div key={el.imdbID} className="movie__card">
        <img
          src={
            el.Poster !== "N/A" ? el.Poster : "https://via.placeholder.com/400"
          }
          alt={el.Title}
        />
        <div className="about__movie">
          <span>{el.Type}</span>
          <h3>{el.Title}</h3>
          <Link to={`/movie/${el.imdbID}`}>Details</Link>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
