import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({ className, placeholder, prefix, type }) => {
  return (
    <>
      <Input
        className={className}
        placeholder={placeholder}
        prefix={prefix}
        type={type}
      />
    </>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
};
export default CustomInput;
