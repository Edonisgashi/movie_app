import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SelectedMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const API_URL = "http://www.omdbapi.com/?apikey=906c9dcc";
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`${API_URL}&i=${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedMovie(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(selectedMovie);
  return (
    <div className="details">
      <Link to="/">Go Back</Link>
      {selectedMovie ? (
        <div className="details__container">
          <img
            src={
              selectedMovie.Poster
                ? selectedMovie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={selectedMovie.Title}
          />
          <h1>
            {selectedMovie.Title} {selectedMovie.Year}
          </h1>
          <h3>Released : {selectedMovie.Released}</h3>
          <h3>Cast : {selectedMovie.Actors}</h3>
          <p>Awards : {selectedMovie.Awards}</p>
          <b>Country : {selectedMovie.Country}</b>
          {selectedMovie.Director !== "N/A" ? (
            <h2>{selectedMovie.Director}</h2>
          ) : null}
          <p>Genre : {selectedMovie.Genre}</p>
          <p>Languages : {selectedMovie.Language}</p>
          <h2>Written by : {selectedMovie.Writer}</h2>
          <h4>Description : {selectedMovie.Plot}</h4>
          <h3>
            IMDB Votes : {selectedMovie.imdbVotes} , Rating :{" "}
            {selectedMovie.imdbRating}
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedMovie;
