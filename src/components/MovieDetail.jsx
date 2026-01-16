import React, { useState } from "react";
import movieDetailData from "../movieDetailData.json";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const [movie] = useState(movieDetailData);

  return (
    <div style={{ display: "flex", gap: "24px", padding: "24px" }}>
      {/* 왼쪽: 포스터 */}
      <img
        src={baseUrl + movie.poster_path}
        alt={movie.title}
        style={{ width: "400px", borderRadius: "8px" }}
      />

      {/* 오른쪽: 정보 영역 */}
      <div style={{ flex: 1 }}>
        {/* 제목 + 평점 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <h1 style={{ margin: 0 }}>{movie.title}</h1>
          <span>⭐ {movie.vote_average}</span>
        </div>

        {/* 장르 */}
        <div style={{ marginBottom: "16px" }}>
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              style={{ marginRight: "8px", fontSize: "14px" }}
            >
              #{genre.name}
            </span>
          ))}
        </div>

        {/* 줄거리 */}
        <p style={{ lineHeight: "1.6" }}>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
