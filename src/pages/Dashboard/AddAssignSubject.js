import React from "react";
import MySelect from "../../components/common/MySelect";

const AddAssignSubject = () => {
  const classOption = [
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
  ];
  const teacherOption = [
    { id: "1", value: "Shahab" },
    { id: "2", value: "Kamran" },
    { id: "3", value: "Kashif" },
  ];
  const subjectOption = [
    { id: "1", value: "React JS" },
    { id: "2", value: "Node JS" },
    { id: "3", value: "Laravel" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <label className="inputs-labels">Select Teacher</label>

            <MySelect
              className="custom-select w-100"
              arrayOption={teacherOption}
              placeholder="Select Teacher"
            />
          </div>
          <div className="col-md-6 mt-1">
            <label className="inputs-labels">Select Subject</label>

            <MySelect
              className="custom-select w-100"
              arrayOption={subjectOption}
              placeholder="Select Subject"
            />
          </div>
          <div className="col-md-6">
            <label className="inputs-labels">Select Class / Section</label>

            <MySelect
              className="custom-select w-100"
              arrayOption={classOption}
              placeholder="Select Class / Section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAssignSubject;
