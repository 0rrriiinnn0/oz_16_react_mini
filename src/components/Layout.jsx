import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* 각 페이지가 여기 표시됨 */}
      </main>
    </div>
  );
}

export default Layout;
