import { useState } from "react";
import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
import MySelect from "../../components/common/MySelect";
import MyModal from "../../components/common/MyModal";
import AddTimetable from "./AddTimetable";

const Timetable = () => {
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
              title="Create New Time Table"
            />
          </div>
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Student Fees</h3>
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
          <div className="col-md-12 search-student-table p-3">
            <table border="1" cellspacing="0">
              <thead className="thead-light p-3">
                <tr>
                  <th>Time</th> <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">08:00:00 to 09:00:00</div>
                  </td>{" "}
                  <td>
                    <div class="p-2 subject">
                      Fundamental of Nursing-I (theory)
                      <span class="d-block mt-1 text-muted">Jawwad</span>
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Fundamental of Nursing-I (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Microbiology (theory)
                      <span class="d-block mt-1 text-muted">
                        Babar Hussain Shah
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Microbiology (practical)
                      <span class="d-block mt-1 text-muted">
                        Babar Hussain Shah
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Microbiology (practical)
                      <span class="d-block mt-1 text-muted">
                        Babar Hussain Shah
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Anatomy and Physiology- (theory)
                    </div>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">09:00:00 to 10:00:00</div>
                  </td>{" "}
                  <td>
                    <div class="p-2 subject">
                      Biochemistry for Nurses (theory)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Biochemistry for Nurses (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">English-I (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">Computer Skills (practical)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Fundamental of Nursing-II (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Anatomy and Physiology-II (theory)
                    </div>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">10:00:00 to 11:00:00</div>
                  </td>{" "}
                  <td>
                    <div class="p-2 subject">
                      Community Health Nursing-I (theory)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Community Health Nursing-I (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">Applied Nutrition (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">Applied Nutrition (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">English-II (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">English-II (theory)</div>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">11:00:00 to 12:00:00</div>
                  </td>{" "}
                  <td colspan="7" class="text-center">
                    Break
                  </td>
                </tr>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">12:00:00 to 13:00:00</div>
                  </td>{" "}
                  <td>
                    <div class="p-2 subject">Pak. Studies* (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">Islamiat* (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Community Health Nursing-I (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Adult Health Nursing I (theory)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">Islamiat* (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">Islamiat* (theory)</div>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
                <tr class="position-relative">
                  <td>
                    <div class="d-flex">13:00:00 to 14:00:00</div>
                  </td>{" "}
                  <td>
                    <div class="p-2 subject">
                      Community Health Nursing-I (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">Applied Nutrition (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Community Health Nursing-I (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">Applied Nutrition (theory)</div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Fundamental of Nursing-II (practical)
                    </div>
                  </td>
                  <td>
                    <div class="p-2 subject">
                      Biochemistry for Nurses (practical)
                    </div>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <MyModal
          title="Create Timetable"
          isModalOpen={IsAddNewModal}
          handleCancel={() => setIsAddNewModal(false)}
        >
          <AddTimetable />
        </MyModal>
      </div>
    </>
  );
};

export default Timetable;
