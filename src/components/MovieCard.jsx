import React from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ title, vote_average, poster_path }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Link to="/details">
        <img
          src={baseUrl + poster_path}
          alt={title}
          style={{ width: "100%", aspectRatio: "3/4" }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px" }}>{title}</h3>
        <span>⭐ {vote_average}</span>
      </div>
    </div>
  );
}

export default MovieCard;
