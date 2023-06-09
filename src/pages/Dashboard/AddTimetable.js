import React, { useState } from "react";
import { Form, Input, Button, TimePicker, Space } from "antd";
import MySelect from "../../components/common/MySelect";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import 'antd/dist/antd.css';
// import './App.css';

// const { Option } = Select;

const AddTimetable = () => {
  const [days, setDays] = useState([]);

  const handleAddDay = () => {
    setDays([...days, {}]);
  };

  const handleRemoveDay = (index) => {
    const filtered = days.filter((day, i) => i !== index);
    setDays(filtered);
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const classOption = [
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
  ];
  const subjectOption = [
    { id: "1", value: "Bio" },
    { id: "2", value: "Chemistry" },
    { id: "3", value: "English" },
  ];
  const teacherOption = [
    { id: "1", value: "Kamran" },
    { id: "2", value: "Shahab" },
    { id: "3", value: "Kashif" },
  ];
  const dayOption = [
    { id: "1", value: "Monday" },
    { id: "2", value: "Tuesday" },
    { id: "3", value: "Wednesday" },
    { id: "4", value: "Thursday" },
    { id: "5", value: "Friday" },
    { id: "6", value: "Saturday" },
    { id: "7", value: "Sunday" },
  ];

  return (
    <>
      <div className="container">
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{
            maxWidth: 1080,
          }}
          autoComplete="off"
        >
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <div className="row day-row">
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">Start Time</label>
                        <TimePicker format="HH:mm" />
                      </div>
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">End Time</label>
                        <TimePicker format="HH:mm" />
                      </div>
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">Subject</label>

                        <MySelect
                          className="custom-select w-100"
                          arrayOption={subjectOption}
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">Teacher</label>

                        <MySelect
                          className="custom-select w-100"
                          arrayOption={teacherOption}
                          placeholder="Teacher"
                        />
                      </div>
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">Class</label>

                        <MySelect
                          className="custom-select w-100"
                          arrayOption={classOption}
                          placeholder="Class"
                        />
                      </div>
                      <div className="col-md-2 std-search-form">
                        <label className="inputs-labels">Day</label>

                        <MySelect
                          className="custom-select w-100"
                          arrayOption={dayOption}
                          placeholder="Teacher"
                        />
                      </div>
                    </div>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddTimetable;
