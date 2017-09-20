import React from "react";
import PropTypes from "prop-types";
import Select from "./elements/Select";

const FilterSelect = ({ onChange, categories }) => {
  const options = categories.map(category => {
    if (category === "SHOW_ALL") {
      return {
        value: "SHOW_ALL",
        text: "Show all"
      };
    }
    return {
      value: category,
      text: category
    };
  });
  return <Select options={options} onChange={onChange} />;
};

FilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default FilterSelect;
