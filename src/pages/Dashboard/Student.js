import { Select } from "antd";
import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
import SearchStudent from "../SearchStudent";
import { useState } from "react";
import MyModal from "../../components/common/MyModal";
import MySelect from "../../components/common/MySelect";

const { Option } = Select;

const Student = () => {
 const [IsAddNewModal, setIsAddNewModal] = useState(false);


    const openStdModal = () =>{
        setIsAddNewModal(true)
    }
    const genderOptions= [
        {id:'1',value:'Male'},
        {id:'2',value:'female'},
        {id:'3',value:'other'},
    ]
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
             title="Add New Student"
            />
              {/* <NavLink to="/addstudent">Add New Student</NavLink>
            </MyButton> */}
          </div>
          <div className="col-md-12 search-student">
            <div className="text-primary">
              <h3>Search Student</h3>
            </div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                {/* <Select
                  size="large"
                  showSearch
                  placeholder="Select Program"
                  allowClear
                  className="custom-select w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select> */}
                 <MySelect
                                            onChange={(e)=>console.log(e)}
                                            value={genderOptions?.value}
                                            arrayOption={genderOptions}
                                        />
              </div>
              <div className="col-md-3 std-search-form">
                <Select
                  size="large"
                  showSearch
                  placeholder="Select Selection"
                  allowClear
                  className="input-primary w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </div>
              <div className="col-md-4 std-search-form">
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


        <MyModal title="Add New Student" isModalOpen={IsAddNewModal} handleCancel={()=>setIsAddNewModal(false)}> 
        <MyInput
                  size="large"
                  className="input-primary w-100"
                  placeholder="Student Name / Registration No. / CNIC No."
                />
        </MyModal>
      </div>
    </>
  );
};

export default Student;
