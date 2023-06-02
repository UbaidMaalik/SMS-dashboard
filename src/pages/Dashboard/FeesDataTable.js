import { Radio, Table, Modal } from "antd";
import { useState } from "react";

const FeesDataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Student's Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Father's Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Registration No",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "CNIC",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <Radio.Group size="middle">
            <Radio.Button
              className="action-btn"
              value="large"
              onClick={showModal}
            >
              <i className="ri-table-line"></i>
            </Radio.Button>
          </Radio.Group>
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "John Doe",
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="responsive-table-container">
            <Table columns={columns} dataSource={data} />
          </div>

          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <table class="table caption-top">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Registration No</th>
                  <th scope="col">Class / Section </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Radio.Group size="middle">
                      <Radio.Button
                        className="action-btn-collect"
                        value="large"
                        //   onClick={showModal}
                      >
                        <i className="ri-currency-line"></i>
                      </Radio.Button>
                      <Radio.Button className="action-btn-del" value="default">
                        <i className="ri-delete-bin-line"></i>
                      </Radio.Button>
                    </Radio.Group>
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default FeesDataTable;
