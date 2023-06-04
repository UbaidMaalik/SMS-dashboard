import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Student from "./pages/Dashboard/Student";
import { Layout, theme } from "antd";
import HeaderContent from "./components/dashboard/HeaderContent";
// import Dashboard from "./pages/Dashboard/Dashboard";
import DashBoard from "./pages/Dashboard/DashBoard";
import Sidebar from "./components/dashboard/Sidebar";
import Staff from "./pages/Dashboard/Staff";
import Login from "./pages/Login";
import Finance from "./pages/Dashboard/Finance";
import Fees from "./pages/Dashboard/Fees";
import Timetable from "./pages/Dashboard/Timetable";
import Academics from "./pages/Dashboard/Academics";
const { Content } = Layout;

function Entry() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <Layout>
            <HeaderContent
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            />
            <Content className="p-3">
              <div>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashBoard" element={<DashBoard />} />
                  <Route path="/student" element={<Student />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="/fees" element={<Fees />} />
                  {/* <Route path="/timetable" element={<Timetable />} /> */}
                  <Route path="/academics" element={<Academics />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Entry;
