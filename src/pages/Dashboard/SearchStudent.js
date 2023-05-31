import { Radio, Table, Modal } from "antd";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const SearchStudent = () => {
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
              //   onClick={showModal}
            >
              <i className="ri-edit-line"></i>
            </Radio.Button>
            <Radio.Button className="action-btn-del" value="default">
              <i className="ri-delete-bin-line"></i>
            </Radio.Button>
            <Radio.Button className="action-btn" value="small">
              <i className="ri-eye-line"></i>
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
      age: 32,
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
      <Container>
        <Row>
          <div className="responsive-table-container">
            <Table columns={columns} dataSource={data} />
          </div>

          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default SearchStudent;
