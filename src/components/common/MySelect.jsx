import React, { forwardRef } from "react";
import { Select } from "antd";
// import ReactHtmlParser from 'react-html-parser'
const { Option } = Select;

const MySelect = forwardRef(
  (
    {
      label,
      mode,
      onSelect,
      onDeselect,
      arrayOption,
      loading,
      multiple,
      onChange,
      value,
      disabled,
      placeholder,
      tagRender,
      showArrow,
      style,
      className,
      allowClear = true,
      size,
    },
    ref
  ) => {
    return (
      <Select
        maxTagCount="responsive"
        mode={mode}
        getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        allowClear={allowClear}
        showSearch
        style={style ? style : { width: "100%" }}
        placeholder={placeholder}
        value={value}
        loading={loading}
        showArrow={showArrow}
        onSelect={onSelect}
        onChange={onChange}
        onDeselect={onDeselect}
        size={size ? size : "default"}
        disabled={disabled}
        className={className ? className : ""}
        tagRender={tagRender}
      >
        {arrayOption?.map((option) => (
          <Option
            key={option.id}
            style={{ backgroundColor: option?.Seqno ? "#fdffd4" : null }}
            value={option?.id}
          >
            {option.value}
          </Option>
        ))}
      </Select>
    );
  }
);

export default MySelect;
