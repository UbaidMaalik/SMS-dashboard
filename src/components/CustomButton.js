import { Button } from "antd";
import PropTypes from "prop-types";

const CustomButton = ({
  text,
  type,
  onClick,
  disabled,
  icon,
  htmlType,
  className,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      htmlType={htmlType}
      className={className}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  htmlType: PropTypes.string,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: "default",
  onClick: () => {},
  disabled: false,
  icon: null,
  htmlType: "button",
  className: "",
};

export default CustomButton;
