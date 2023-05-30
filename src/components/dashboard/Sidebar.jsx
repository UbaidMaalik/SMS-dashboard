import { Layout, Menu } from "antd";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo-vertical">
          <h5>School Managment System</h5>
        </div>
        <Menu
          className="sider-bg"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {SidebarData.map((item) => (
            <Menu.Item
              key={item.id}
              icon={<i className={item.icon}></i>}
              style={{ color: "#fff" }}
            >
              <NavLink to={item.path} className="sider-item">
                {item.title}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
