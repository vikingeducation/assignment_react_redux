import React from "react";

const CategoryFilter = ({ onChange }) => {
  return (
  <div>
  <label>Category Filter:</label>
  <input type="text" onChange={onChange} />
  </div>);
};

export default CategoryFilter;
