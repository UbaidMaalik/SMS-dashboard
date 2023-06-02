import React from "react";
import DashboardCards from "./DashboardCards";

function DashBoard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <DashboardCards />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
