import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import DashBoard from "./pages/Dashboard/DashBoard";

function Entry() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Entry;
