import React from "react";
import PropTypes from "prop-types";

const Select = props => {
  const { options, ...restOfProps } = props;
  const optionElements = options.map(option =>
    <option key={option} value={option}>
      {option}
    </option>
  );

  return (
    <select className="form-control" {...restOfProps}>
      {optionElements}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array
};

export default Select;
