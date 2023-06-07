import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";
import Swal from "sweetalert2";
import MySelect from "../../components/common/MySelect";
import AddAssignSubject from "./AddAssignSubject";

const AssignSubject = () => {
  const handleDeleteClick = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button-class",
        cancelButton: "custom-cancel-button-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
  };
  const teacherOption = [
    { id: "1", value: "Shahab" },
    { id: "2", value: "Kamran" },
    { id: "3", value: "Kashif" },
  ];
  const classOption = [
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
              title="Assign Subject"
            />
          </div>
          <MyModal
            title="Assign Subject"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            <AddAssignSubject />
          </MyModal>
        </div>
        <div className="row">
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Search Subject</h3>
            </div>
            <div className="row">
              <div className="col-md-5 std-search-form">
                <label className="inputs-labels">Select Teacher</label>

                <MySelect
                  className="custom-select w-100"
                  arrayOption={teacherOption}
                  placeholder="Select Teacher"
                />
              </div>
              <div className="col-md-5 std-search-form">
                <label className="inputs-labels">Select Class / Section</label>

                <MySelect
                  className="custom-select w-100"
                  arrayOption={classOption}
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
                <div className="w-100 mx-auto justify-content-center">
                  <div className="action-buttons">
                    <button className="action-button xs" onClick={openStdModal}>
                      <i className="ri-edit-line"></i>
                    </button>
                    <button
                      className="action-button xs"
                      onClick={handleDeleteClick}
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                    <button className="action-button xs">
                      <i className="ri-eye-line"></i>
                    </button>
                  </div>
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
