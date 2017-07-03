import React from 'react';

const ProductDetail = ({type, data}) => {
  return (
    <p>
      <strong>{type}: </strong>
      {data}
    </p>
  )
};

export default ProductDetail;