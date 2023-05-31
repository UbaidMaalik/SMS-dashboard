import { Button } from "antd";
import MyInput from "../common/MyInput";
import MyButton from "../common/MyButton";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-6 page-title">
              <h3>Dashboard</h3>
            </div>
            {/* <div className="col-md-6 col-4 search">
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
            </div> */}
            <div className="col-md-3 col-6 profile">
              <div className="dropdown">
                <div>
                  <span onClick={toggleDropdown}>
                    <img src="./images/avatar.png" alt="avatar" />
                    demo.shool.com
                  </span>
                  {isOpen && (
                    <div className="dropdown-content">
                      <p>Edit Account</p>
                      <p>Collage Settings</p>
                      <p>Logout</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
