import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";
import { Radio } from "antd";

const Sections = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
  };
  const sectionsData = [
    { id: "1", value: "Class 1" },
    { id: "2", value: "Class 2" },
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
              title="Add a New Section"
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
          {[1, 2, 3].map((item, i) => (
            <div className="col-md-4">
              <div className="card section-card" key={i}>
                <div className="card-header card-header-primary position-relative">
                  <h4 className="card-title">demo - demo</h4>
                </div>
                <div className="card-body position-relative">
                  <h6>Current Section / Class</h6>
                  <MySelect
                    value={sectionsData?.value}
                    arrayOption={sectionsData}
                  />
                </div>
                <div className="card-footer">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Sections;
