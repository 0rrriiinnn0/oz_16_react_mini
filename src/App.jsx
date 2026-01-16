import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      {/* Layout을 루트로 지정 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} /> {/* 메인 페이지 */}
        <Route path="details" element={<MovieDetail />} /> {/* 상세 페이지 */}
      </Route>
    </Routes>
  );
}

export default App;
