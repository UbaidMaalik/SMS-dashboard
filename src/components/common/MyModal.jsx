
import React, { children, useState } from 'react';
import { Button, Modal } from 'antd';


function MyModal({title,isModalOpen,handleOk,handleCancel,children   }) {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    )
}

export default MyModal
