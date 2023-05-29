import React from "react";
import MyButton from "../components/common/MyButton";
import MyInput from "../components/common/MyInput";

const AddStudent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Add a New Student</h3>
            </div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                {/* <Select
                  size="large"
                  placeholder="Select Program"
                  allowClear
                  className="input-primary w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select> */}
              </div>
              <div className="col-md-3 std-search-form">
                {/* <Select
                  size="large"
                  placeholder="Select Selection"
                  allowClear
                  className="input-primary w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select> */}
              </div>
              <div className="col-md-4 std-search-form">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Student Name / Registration No. / CNIC No."
                />
              </div>
              <div className="col-md-2 std-search-form">
                <MyButton
                  className="std-search-icon"
                  type="primary"
                  htmlType="submit"
                  icon={<i className="ri-search-eye-line"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
