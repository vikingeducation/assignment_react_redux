import React from "react";
import FilterContainer from "../containers/filterContainer";

const Filter = () => {
  return (
    <div>
      <FilterContainer filter="SHOW_ALL">Show all</FilterContainer>
      {", "}
      <FilterContainer filter="SHOW_PURCHADED">Show purchased</FilterContainer>
      {", "}
      <FilterContainer filter="SHOW_NOT_PURCHASED">
        Show not purchased
      </FilterContainer>
    </div>
  );
};

export default Filter;
