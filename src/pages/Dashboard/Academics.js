import React from "react";
import { Tabs } from "antd";
import Sections from "./Sections";
import Subject from "./Subject";
import AssignSubject from "./AssignSubjects";
import Timetable from "./Timetable";

function Academics() {
  const onChangeTab = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Classes/Sec`,
      children: (
        <div>
          <Sections />
        </div>
      ),
    },
    {
      key: "2",
      label: ` Subject`,
      children: (
        <div>
          <Subject />
        </div>
      ),
    },
    {
      key: "3",
      label: `Subjects To Class`,
      children: (
        <div>
          <AssignSubject />
        </div>
      ),
    },
    {
      key: "4",
      label: `Time Table`,
      children: (
        <div>
          <Timetable />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChangeTab}
        type="card"
      />
    </div>
  );
}

export default Academics;
