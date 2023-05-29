import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import DashBoard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Header";
import Student from "./pages/Dashboard/Student";
import AddStudent from "./pages/AddStudent";
import SearchStudent from "./pages/SearchStudent";

function Entry() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 sidebar-bg">
              <Sidebar />
            </div>
            <div className="col-md-10 main-content">
              <Header />
              <Routes>
                {/* <Route path="/" element={<DashBoard />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/student" element={<Student />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/searchstudent" element={<SearchStudent />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Entry;
