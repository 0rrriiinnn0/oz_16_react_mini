import React, { useState } from "react";
import MovieCard from "./MovieCard";
import movieListData from "../movieListData.json";

function MovieList() {
  const [movies] = useState(movieListData.results);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "16px",
        padding: "16px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MovieList;
