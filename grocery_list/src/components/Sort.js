import React from "react";
import PropTypes from "prop-types";

const Sort = ({ onClick }) => {
  return (
    <form>
      <input type="text" name="sort" />
      <input type="submit" className="btn" onClick={onClick} />
    </form>
  );
};

export default Sort;

