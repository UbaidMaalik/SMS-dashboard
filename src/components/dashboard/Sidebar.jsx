import { Layout, Menu } from "antd";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SubMenu from "antd/es/menu/SubMenu";

const { Sider } = Layout;

const renderMenuItems = (items) => {
  return items.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          key={item.id}
          title={item.title}
          icon={<i className={item.icon}></i>}
          style={{ color: "#fff" }}
        >
          {renderMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item.id}
          icon={<i className={item.icon}></i>}
          style={{ color: "#fff" }}
        >
          <NavLink to={item.path}>{item.title}</NavLink>
        </Menu.Item>
      );
    }
  });
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="sidebar">
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo-vertical">
          <h5>SMS</h5>
        </div>
        <Menu
          className="sider-bg"
          mode="inline"
          theme="light"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {renderMenuItems(SidebarData)}
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
