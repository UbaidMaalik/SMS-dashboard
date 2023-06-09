import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
import SearchStudent from "./SearchStudent";
import { useState } from "react";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";
import AddStaff from "./AddStaff";
import SearchStaff from "./SearchStaff";

const Staff = () => {
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStaffModal = () => {
    setIsAddNewModal(true);
  };

  const typeOptions = [
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
                <label className="inputs-labels">Select Department</label>
                <MySelect
                  className="custom-select w-100"
                  arrayOption={staffOptions}
                  placeholder="Select Department"
                />
              </div>
              <div className="col-md-3 std-search-form">
                <label className="inputs-labels">Select Type</label>
                <MySelect
                  className="custom-select w-100"
                  arrayOption={typeOptions}
                  placeholder="Select Type"
                />
              </div>
              <div className="col-md-4 std-search-form">
                <label className="inputs-labels">Staff Name</label>
                <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Staff Name"
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
            {/* <SearchStudent /> */}
            <SearchStaff />
          </div>
        </div>

        <MyModal
          title="Add New Staff"
          isModalOpen={IsAddNewModal}
          handleCancel={() => setIsAddNewModal(false)}
        >
          <AddStaff />
        </MyModal>
      </div>
    </>
  );
};

export default Staff;
