import React from "react";
import { Button } from "antd";

function MyButton({ Title, btnOnClick, className, type, icon }) {
  return (
    <Button onClick={btnOnClick} className={className} type={type} icon={icon}>
      {Title}
    </Button>
  );
}

export default MyButton;
