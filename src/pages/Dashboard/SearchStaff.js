import React, { useState } from "react";
import Swal from "sweetalert2";
import MySelect from "../../components/common/MySelect";

const SearchStaff = () => {
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
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {[1, 2, 3, 4].map((item, i) => (
            <div className="col-md-3">
              <div className="card section-card" key={i}>
                <div className="card-header card-header-primary position-relative">
                  <h4 className="card-title">Shahab Khan</h4>
                </div>
                <div className="card-body staff-avatar position-relative">
                  <img src="./images/avatar.png" alt="staff-avatar" />
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
                      <i className="ri-mail-close-line"></i>
                    </button>
                    <button className="action-button xs">
                      <i className="ri-wallet-3-line"></i>
                    </button>
                    <button className="action-button xs">
                      <i className="ri-money-dollar-box-line"></i>
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

export default SearchStaff;
