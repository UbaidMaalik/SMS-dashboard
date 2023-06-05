import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";

import SubjectDataTable from "./SubjectDataTable";

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
            title="Add New Section"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            section / Classes
          </MyModal>
        </div>
        <div className="row mt-2">
          <SubjectDataTable />
        </div>
      </div>
    </>
  );
};

export default Subject;
