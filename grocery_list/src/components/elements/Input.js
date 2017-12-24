import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const classNames = `form-control ${ props.className || '' }`;

  return (
    <input {...props} className={classNames}  />
  );
};

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
