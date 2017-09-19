import React, { PropTypes } from "react";

const Button = props => {
  const { type, color, text, ...rest } = props;

  return (
    <button type={type} className={`btn btn-${color}`} {...rest}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  color: "primary",
  text: "Click This"
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string
};

export default Button;
