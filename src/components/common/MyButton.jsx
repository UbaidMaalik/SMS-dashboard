import React from "react";
import { Button } from "antd";

function MyButton({ children, btnOnClick, className, type, icon }) {
  return (
    <Button onClick={btnOnClick} className={className} type={type} icon={icon}>
      {children}
    </Button>
  );
}

export default MyButton;
