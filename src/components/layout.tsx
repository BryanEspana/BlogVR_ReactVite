// src/components/Layout.jsx

import React from "react";
import TopBar from "./topbar";
import { Outlet } from 'react-router-dom';


function Layout({ children }) {
  return (
    <div className="full">
      <TopBar />
      <main><Outlet /></main>

    </div>
  );
}

export default Layout;
