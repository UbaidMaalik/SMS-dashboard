import { Layout, Menu } from "antd";
import { Image } from "react-bootstrap";
import { SidebarData } from "./SidebarData";

const { Sider } = Layout;

const Sidebar = () => {
  console.log(SidebarData);
  return (
    <>
      <div className="sidebar">
        <Sider width={200}>
          <div className="logo-vertical">
            <Image src="./images/Logo.png" className="logo-main" />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {SidebarData.map((item) => (
              <Menu.Item
                key={item.id}
                icon={<i className={item.icon}></i>}
                style={{ backgroundColor: "#ded4fc", color: "#8970d6" }}
              >
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </div>
    </>
  );
};

export default Sidebar;
