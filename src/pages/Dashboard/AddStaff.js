import React from "react";
import MyInput from "../../components/common/MyInput";
import MySelect from "../../components/common/MySelect";
import { InboxOutlined } from "@ant-design/icons";
import { DatePicker, Upload } from "antd";
import MyButton from "../../components/common/MyButton";

const AddStaff = () => {
  const genderOptions = [
    { id: "1", value: "Resigned" },
    { id: "2", value: "Active" },
  ];
  const staffOptions = [
    { id: "1", value: "HR" },
    { id: "2", value: "Admission" },
    { id: "3", value: "Managment" },
    { id: "4", value: "General" },
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
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Staff ID</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Staff ID*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Staff Name</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Staff Name*"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">CNIC</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="CNIC*"
            />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-3">
            <label className="inputs-labels">Phone</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Phone*"
            />
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Gender</label>
            <MySelect
              className="custom-select w-100"
              onChange={(e) => console.log(e)}
              arrayOption={genderOptions}
              placeholder="Select Gender"
            ></MySelect>
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Designation</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Designation*"
            />
          </div>
          <div className="col-md-3">
            <label className="inputs-labels">Age</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Age*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Join Date</label>
            <DatePicker className="input-primary w-100 mb-2" />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Select Department</label>
            <MySelect
              className="custom-select w-100"
              arrayOption={staffOptions}
              placeholder="Select Department"
            />
          </div>
          <div className="col-md-4 mt-1">
            <label className="inputs-labels">Address</label>
            <MyInput
              size="large"
              className="input-primary w-100 mb-2"
              placeholder="Address*"
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

export default AddStaff;
