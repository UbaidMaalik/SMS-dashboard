import React from "react";
import MySelect from "../../components/common/MySelect";
import { Upload, DatePicker } from "antd";
import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";

const AddStudent = () => {
  const classOptions = [
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
  ];
  const genderOptions = [
    { id: "male", value: "Male" },
    { id: "female", value: "Female" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-1">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <i className="ri-add-line"></i>
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 main-heading">
            <h6>Academics Detail*</h6>
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Select Class</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={classOptions}
              placeholder="Select Class"
            ></MySelect>
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Select Section</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={classOptions}
              placeholder="Select Class"
            ></MySelect>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Student's Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Student's Name*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Father's Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Father's Name*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Father's Occupation</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Father's Occupation*"
            />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-12 main-heading">
            <h6>Guardian Detail*</h6>
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Guardian's Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Guardian's Name*"
            />
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Guardian Occupation</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Guardian Occupation*"
            />
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Guardian Relation</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Guardian Relation*"
            />
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Guardian Phone</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Guardian Phone*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Date Of Birth</label>
            <DatePicker className="input-primary w-100 mb-2" />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">CNIC</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="CNIC*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Nationality</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Nationality*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Gender</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={genderOptions}
              placeholder="Select Gender"
            ></MySelect>
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Age</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Enter Age*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">City</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Enter City*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-1">
            <label className="inputs-labels">Admission Date</label>
            <DatePicker className="input-primary w-100 mb-2" />
          </div>
          <div className="col-md-3 mt-1">
            <label className="inputs-labels">Student Contact</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Student Contact*"
            />
          </div>
          <div className="col-md-3 mt-1">
            <label className="inputs-labels">Enrollment Number</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Enrollment Number*"
            />
          </div>
          <div className="col-md-3 mt-1">
            <label className="inputs-labels">Entry Marks</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Entry Marks*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mt-4">
            <MyButton
              className="button-primary"
              type="primary"
              title="SUBMIT"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
