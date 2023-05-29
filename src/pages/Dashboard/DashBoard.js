import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Student from "./Student";

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Header />
            <Student />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
