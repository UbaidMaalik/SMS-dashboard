import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";

import SubjectDataTable from "./SubjectDataTable";
import MyInput from "../../components/common/MyInput";
import AddSubject from "./AddSubject";

const Subject = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
  };
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
              title="Add Subject"
            />
          </div>
          <MyModal
            title="Add New Subject"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            <AddSubject />
          </MyModal>
        </div>
        <div className="row">
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Search Subject</h3>
            </div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                <label className="inputs-labels">Subject Name</label>
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Subject"
                />
              </div>
              <div className="col-md-3 std-search-form">
                <label className="inputs-labels">Subject Code</label>
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Subject Code"
                />
              </div>
              <div className="col-md-4 std-search-form">
                <label className="inputs-labels">Type</label>
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Type"
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
        <div className="row mt-2">
          <SubjectDataTable />
        </div>
      </div>
    </>
  );
};

export default Subject;
