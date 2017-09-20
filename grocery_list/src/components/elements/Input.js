import React from "react";

const Input = ({ props }) => {
  const { type, ...rest } = props;

  return <input type={type} {...rest} />;
};

Input.defaultProps = {
  type: "text"
};

export default Input;
