import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Radio, Button, Input, Modal, Space, Table } from "antd";
import { useRef, useState } from "react";
// import Highlighter from "react-highlight-words";
const data = [
  {
    key: "1",
    name: "Biology",
    code: "Bio-1",
    credithour: "2",
    type: "Theory",
  },
  {
    key: "2",
    name: "Physics",
    code: "Phy-1",
    credithour: "2",
    type: "Theory",
  },
  {
    key: "3",
    name: "Chemistry",
    code: "Chem-1",
    credithour: "2",
    type: "Practicle",
  },
  {
    key: "4",
    name: "Math",
    code: "Math-1",
    credithour: "2",
    type: "Theory",
  },
];
const SubjectDataTable = () => {
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
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            X
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: "15%",
    },
    {
      title: "Credit Hour",
      dataIndex: "credithour",
      key: "credithour",
      width: "20%",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "20%",
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <Radio.Group>
            <Radio.Button value="edit" className="btn-success">
              <i className="ri-pencil-line"></i>
            </Radio.Button>
            <Radio.Button value="delete" className="btn-danger">
              <i className="ri-close-line"></i>
            </Radio.Button>
          </Radio.Group>
        </>
      ),
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
            <Table columns={columns} dataSource={data} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default SubjectDataTable;
