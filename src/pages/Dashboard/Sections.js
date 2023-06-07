import React, { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";
import Swal from "sweetalert2";
import AddSection from "./AddSection";

const Sections = () => {
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
            <AddSection />
          </MyModal>
        </div>

        <div className="row mt-3">
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
                    placeholder="section / class"
                  />
                </div>
                <div className="card-footer">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Sections;
