import { Select } from "antd";
import MyButton from "../../components/common/MyButton";
import MyInput from "../../components/common/MyInput";
const { Option } = Select;

const Student = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 student-new">
            <MyButton
              className="add-student"
              type="primary"
              htmlType="submit"
              icon={<i className="ri-add-line"></i>}
            >
              Add New Student
            </MyButton>
          </div>
          <div className="col-md-12 search-student">
            <div className="stdsearch-icon"></div>
            <div className="row">
              <div className="col-md-3 std-search-form">
                <Select
                  size="large"
                  placeholder="Select Program"
                  allowClear
                  className="search-input w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </div>
              <div className="col-md-3 std-search-form">
                <Select
                  size="large"
                  placeholder="Select Selection"
                  allowClear
                  className="search-input w-100"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </div>
              <div className="col-md-4 std-search-form">
                <MyInput
                  size="large"
                  className="search-input w-100"
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
        </div>
      </div>
    </>
  );
};

export default Student;
