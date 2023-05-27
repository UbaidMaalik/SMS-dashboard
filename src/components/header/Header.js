import { Input, Button } from "antd";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 page-title">
              <h3>Dashboard</h3>
            </div>
            <div className="col-md-4 search">
              <CustomInput
                className="search-input"
                placeholder="Search"
                prefix={<i className="ri-search-2-line"></i>}
              />
              <CustomButton
                className="notification"
                type="primary"
                htmlType="submit"
                icon={<i className="ri-notification-3-line"></i>}
              ></CustomButton>
            </div>
            <div className="col-md-2 profile">
              <h3>Profile</h3>
            </div>
            <div className="col-md-2 profile">
              <Button
                className="edit"
                type="primary"
                htmlType="submit"
                icon={<i className="ri-edit-box-line"></i>}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
