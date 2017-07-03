import React, { PropTypes } from "react";

const FilterLink = ({ onClick, active, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return <a href="#" onClick={onClick}>{children}</a>;
};

FilterLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
