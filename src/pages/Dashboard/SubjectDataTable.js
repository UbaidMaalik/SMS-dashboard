import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import MyModal from "../../components/common/MyModal";
import AddSubject from "./AddSubject";

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
  const handleDeleteClick = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button-class",
        cancelButton: "custom-cancel-button-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
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
          <div className="action-buttons">
            <button className="action-button xs" onClick={openStdModal}>
              <i className="ri-edit-line"></i>
            </button>
            <button className="action-button xs" onClick={handleDeleteClick}>
              <i className="ri-delete-bin-line"></i>
            </button>
            <button className="action-button xs">
              <i className="ri-eye-line"></i>
            </button>
          </div>
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

          <MyModal
            title="Edit Subject"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            <AddSubject />
          </MyModal>
        </div>
      </div>
    </>
  );
};

export default SubjectDataTable;
