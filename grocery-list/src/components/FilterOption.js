import React, { PropTypes } from "react";

const FilterOption = ({ onClick, children }) => {
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
};

FilterOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default FilterOption;
