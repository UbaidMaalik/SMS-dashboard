import React from "react";
import MySelect from "../../components/common/MySelect";
import MyInput from "../../components/common/MyInput";

const AddSection = () => {
  const yearsList = () => {
    const currentYear = new Date().getFullYear();
    const endYear = currentYear + 10;
    const years = [];

    for (let year = 2000; year <= endYear; year++) {
      years.push({
        id: year,
        value: year,
      });
    }

    console.log(years);

    return years;
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-1">
            <label className="inputs-labels">Section Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Section Name*"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">From Year</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={yearsList()}
              placeholder="Select Class"
            ></MySelect>
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">To Year</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={yearsList()}
              placeholder="Select Class"
            ></MySelect>
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Student Limits</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Student Limits*"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSection;
