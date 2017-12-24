import React from 'react';
import PropTypes from 'prop-types';

const Textarea = props => {
  const classNames = `form-control ${ props.className || '' }`;

  return (
    <textarea {...props} className={classNames}  />
  );
};

Textarea.propTypes = {
  className: PropTypes.string
};

export default Textarea;
