import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
import SearchStudent from "./SearchStudent";
import { useState } from "react";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const Staff = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStaffModal = () => {
    setIsAddNewModal(true);
  };
  const genderOptions = [
    { id: "male", value: "Male" },
    { id: "female", value: "Female" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 student-new">
            <MyButton
              className="button-primary"
              type="primary"
              icon={<i className="ri-add-line"></i>}
              btnOnClick={openStaffModal}
              title="Add New Teacher"
            />
          </div>
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Search Teacher</h3>
            </div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                <MySelect
                  className="custom-select w-100"
                  onChange={(e) => console.log(e)}
                  value={genderOptions?.value}
                  arrayOption={genderOptions}
                />
              </div>
              <div className="col-md-3 std-search-form">
                <MySelect
                  className="custom-select w-100"
                  onChange={(e) => console.log(e)}
                  value={genderOptions?.value}
                  arrayOption={genderOptions}
                />
              </div>
              <div className="col-md-4 std-search-form">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Teacher Name"
                />
              </div>
              <div className="col-md-2 std-search-form">
                <MyButton
                  className="std-search-icon"
                  type="primary"
                  htmlType="submit"
                  icon={<i className="ri-search-eye-line"></i>}
                ></MyButton>
              </div>
            </div>
          </div>
          <div className="col-md-12 search-student-table">
            <SearchStudent />
          </div>
        </div>

        <MyModal
          title="Add New Student"
          isModalOpen={IsAddNewModal}
          handleCancel={() => setIsAddNewModal(false)}
        >
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-3">
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text p-3">
                    Click or drag profile photo to upload
                  </p>
                </Upload.Dragger>
              </div>
              <div className="col-md-3 mt-3">
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Teacher's Name"
                />
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Guardian's Name"
                />
                <input type="date" className="input-date w-100 border-1 mb-2" />
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Contact Number"
                />
              </div>
              <div className="col-md-3 mt-3">
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Father's Name."
                />
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Guardian's Occupation"
                />
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="CNIC"
                />
                <input type="date" className="input-date w-100 border-1" />
              </div>
              <div className="col-md-3 mt-3">
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Father's Occupation"
                />
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Guardian's Phone"
                />
                <MyInput
                  size="large"
                  className="input-primary w-100 mb-2"
                  placeholder="Nationality"
                />
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Registration Number"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-3">
                <MySelect
                  className="custom-select w-100"
                  onChange={(e) => console.log(e)}
                  arrayOption={genderOptions}
                  placeholder="Select Gender"
                ></MySelect>
              </div>
              <div className="col-md-3">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Age"
                />
              </div>
              <div className="col-md-3">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="City"
                />
              </div>
              <div className="col-md-3">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Nationality"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
        </MyModal>
      </div>
    </>
  );
};

export default Staff;
