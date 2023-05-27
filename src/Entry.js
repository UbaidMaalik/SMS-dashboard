import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

function Entry() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Entry;
