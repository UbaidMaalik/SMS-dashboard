import React from "react";
import { Button } from "antd";

function MyButton({ children, btnOnClick, className, type, icon,title }) {
  return (
    <Button onClick={btnOnClick} className={className} type={type} icon={icon}  >
      {title}
      </Button>
      
   
  );
}

export default MyButton;
