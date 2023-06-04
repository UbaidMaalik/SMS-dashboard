import React from 'react'
import { Tabs } from 'antd';


function Academics() {
 
    const onChangeTab = (key) => {
        console.log(key);
      };

      const items = [
        {
          key: '1',
          label: `Classes/Sec`,
          children: <div>

          </div>,
        },
        {
          key: '2',
          label: ` Subject`,
          children: <div>

          </div>,
        },
        {
          key: '3',
          label: `Subjects To Class`,
          children: <div>

          </div>,
        },
        {
          key: '4',
          label: `Time Table`,
          children: <div>

          </div>,
        },
      ];

    return (
        <div>
           <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} type="card" />
        </div>
    )
}

export default Academics
