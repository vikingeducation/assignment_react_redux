import React from "react";
import PropTypes from "prop-types";
import Select from "./elements/Select";

const Sort = ({ onChange }) => {
  const options = [
    {
      text: "Name Ascending",
      value: "NAME_ASC"
    },
    {
      text: "Name Descending",
      value: "NAME_DESC"
    }
  ];

  return (
    <Select options={options} onChange={onChange} />
  )
};

Sort.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Sort;
