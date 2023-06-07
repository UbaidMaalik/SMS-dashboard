import { Container, Row } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import MyModal from "../../components/common/MyModal";
import AddStudent from "./AddStudent";
import Swal from "sweetalert2";

const data = [
  {
    key: "1",
    name: "John Brown",
    fathername: "Golden Brown",
    class: "one",
    section: "one",
    rollno: "0001",
    contact: "+92-346-1900069",
  },
  {
    key: "2",
    name: "Jim Green",
    fathername: "Golden Brown",
    class: "one",
    section: "one",
    rollno: "0001",
    contact: "+92-346-1900069",
  },
  {
    key: "3",
    name: "Joe Black",
    fathername: "Golden Brown",
    class: "one",
    section: "one",
    rollno: "0001",
    contact: "+92-346-1900069",
  },
  {
    key: "4",
    name: "Jhon Doe",
    fathername: "Golden Brown",
    class: "one",
    section: "one",
    rollno: "0001",
    contact: "+92-346-1900069",
  },
];
const SearchStudent = () => {
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
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);
  const [IsAddNewModal, setIsAddNewModal] = useState(false);

  const openStdModal = () => {
    setIsAddNewModal(true);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
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
      ...getColumnSearchProps("name"),
    },
    {
      title: "Father's Name",
      dataIndex: "fathername",
      key: "key",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "key",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "key",
    },
    {
      title: "Roll Number",
      dataIndex: "rollno",
      key: "key",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "key",
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
      <Container>
        <Row>
          <div className="responsive-table-container">
            <Table columns={columns} dataSource={data} />
          </div>

          <MyModal
            title="Enroll Student"
            isModalOpen={IsAddNewModal}
            handleCancel={() => setIsAddNewModal(false)}
          >
            <AddStudent />
          </MyModal>
        </Row>
      </Container>
    </>
  );
};

export default SearchStudent;
