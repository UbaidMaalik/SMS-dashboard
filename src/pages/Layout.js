import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
