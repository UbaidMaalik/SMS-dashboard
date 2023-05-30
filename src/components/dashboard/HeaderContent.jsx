import { Button } from "antd";
import MyInput from "../common/MyInput";
import MyButton from "../common/MyButton";

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
              <MyInput
                className="input-primary"
                placeholder="Search"
                prefix={<i className="ri-search-2-line"></i>}
              />
              <MyButton
                className="notification"
                type="primary"
                htmlType="submit"
                icon={<i className="ri-notification-3-line"></i>}
              ></MyButton>
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
