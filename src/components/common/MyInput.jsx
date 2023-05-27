import React from "react";
import { Input } from "antd";

function MyInput({ value, onChange, className, placeholder, prefix }) {
  return (
    <Input
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
      prefix={prefix}
    />
  );
}

export default MyInput;
