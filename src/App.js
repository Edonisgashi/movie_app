import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
const App = () => {
  const API_URL = "http://www.omdbapi.com/?apikey=906c9dcc";
  const [movie, setMovie] = useState(null);

  const getMovies = async (title) => {
    await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.Search))
      .catch((err) => console.log(err));
  };
  console.log(movie);

  return (
    <>
      <div className="container">
        <h1 className="logo">MovieLand</h1>
        <div className="search">
          <input
            type="search"
            placeholder="Enter your movie"
            defaultValue=""
            onChange={(e) => getMovies(e.target.value)}
          />
        </div>
        <div className="movies__container">
          {movie
            ? movie.map((el) => {
                return <MovieCard el={el} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default App;
