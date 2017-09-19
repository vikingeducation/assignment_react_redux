import React from "react";

const PurchasedFilter = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="PURCHASED">Purchased</option>
      <option value="NOT_PURCHASED">Not Purchased</option>
      <option value="ALL">all</option>
    </select>
  );
};

export default PurchasedFilter