import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
import SearchStudent from "./SearchStudent";
import { useState } from "react";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";
import AddStudent from "./AddStudent";

const Student = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
  };
  const classOptions = [
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
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
              title="Enroll Student"
            />
          </div>
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Search Student</h3>
            </div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                <label className="inputs-labels">Select Class</label>
                <MySelect
                  className="custom-select w-100"
                  arrayOption={classOptions}
                  placeholder="Select Class"
                ></MySelect>
              </div>
              <div className="col-md-3 std-search-form">
                <label className="inputs-labels">Roll Number</label>
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Roll Number"
                />
              </div>
              <div className="col-md-4 std-search-form">
                <label className="inputs-labels">Student Name / CNIC</label>
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
                ></MyButton>
              </div>
            </div>
          </div>
          <div className="col-md-12 search-student-table">
            <SearchStudent />
          </div>
        </div>

        <MyModal
          title="Enroll Student"
          isModalOpen={IsAddNewModal}
          handleCancel={() => setIsAddNewModal(false)}
        >
          <AddStudent />
        </MyModal>
      </div>
    </>
  );
};

export default Student;
