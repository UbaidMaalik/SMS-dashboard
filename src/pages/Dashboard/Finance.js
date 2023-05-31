import React from "react";

const Finance = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Finance</h3>
            </div>
          </div>
        </div>
        <div className="row search-student">
          <div className="col-md-4">
            <div className="card">
              <img src="./images/fees.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fees</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./images/fees.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Expenditures</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
