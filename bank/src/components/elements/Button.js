import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {type, size, color, children, className, ...rest} = props;
  const sizeClass = size ? `btn-${size}` : '';

  return (
    <button
      type={type || "button"}
      className={`btn btn-${color} ${sizeClass} ${ className || '' }`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Button;
