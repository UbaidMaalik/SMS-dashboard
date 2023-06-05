import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";
import { Radio } from "antd";

import SubjectDataTable from "./SubjectDataTable";
import MySelect from "../../components/common/MySelect";
import MyInput from "../../components/common/MyInput";

const AssignSubject = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
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
              btnOnClick={openStdModal}
              title="Assign Subject"
            />
          </div>
          <MyModal
            title="Add New Section"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            section / Classes
          </MyModal>
        </div>
        <div className="row">
          <div className="col-md-12 search-student">
            <div className="text-primary">{/* <h3>Search Student</h3> */}</div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                <MySelect
                  className="custom-select w-100"
                  placeholder="Select Teacher"
                />
              </div>
              <div className="col-md-3 std-search-form">
                <MySelect
                  className="custom-select w-100"
                  placeholder="Select Class / Section"
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
        </div>
        <div className="row mt-2 justify-content-center">
          <div className="col-md-4 mt-2">
            <div className="card section-card">
              <div className="card-header card-header-primary position-relative">
                <h4 className="card-title">English V (theory)</h4>
              </div>
              <div className="card-body position-relative">
                <h6>Subject Code: Bio-1</h6>
                {/* <MySelect value={sections?.value} arrayOption={sections} /> */}
              </div>
              <div className="card-footer text-center">
                <div className="w-100 mx-auto">
                  <Radio.Group>
                    <Radio.Button value="edit" className="btn-success">
                      <i className="ri-pencil-line"></i>
                    </Radio.Button>
                    <Radio.Button value="delete" className="btn-danger">
                      <i className="ri-close-line"></i>
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignSubject;
