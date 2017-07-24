import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ type, data }) => {
  return (
    <p>
      <strong>{type}: </strong>
      {data}
    </p>
  );
};

ProductDetail.propTypes = {
  type: PropTypes.string,
  data: PropTypes.node
};

export default ProductDetail;
