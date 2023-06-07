import React from "react";
import MySelect from "../../components/common/MySelect";
import MyInput from "../../components/common/MyInput";

const AddSubject = () => {
  const classOption = [
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-1">
            <label className="inputs-labels">Subject Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Subject Name*"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Subject Code</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Subject Code*"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Type</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Type*"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Credit Hour</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Credit Hour*"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Class / Section</label>
            <MySelect
              className="custom-select w-100"
              arrayOption={classOption}
              placeholder="Class / Section"
            ></MySelect>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
