import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const { options, className, ...restOfProps } = props;
  const classNames = 'form-control ' + className;
  const optionsElements = options.map(option => {
    return <option value={option.value} key={option.value}>{option.name}</option>;
  });

  return (
    <select className={classNames} {...restOfProps}>
      {optionsElements}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Select;
