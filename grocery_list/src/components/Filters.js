import React from "react";
import FilterLinkContainer from "../containers/FilterLinkContainer";

const Filters = ({ categories }) => {
  const categoryFilters = categories.map(category =>
    <span key={category}>
      {", "}
      <FilterLinkContainer filterType="categoryFilter" filter={category}>
        Show {category}
      </FilterLinkContainer>
    </span>
  );
  return (
    <div className="Filters well">
      <FilterLinkContainer filterType="purchaseFilter" filter="SHOW_ALL">
        Show all
      </FilterLinkContainer>
      {", "}
      <FilterLinkContainer filterType="purchaseFilter" filter="SHOW_PURCHASED">
        Show purchased
      </FilterLinkContainer>
      {", "}
      <FilterLinkContainer
        filterType="purchaseFilter"
        filter="SHOW_NOT_PURCHASED"
      >
        Show not purchased
      </FilterLinkContainer>
      <br />

      <FilterLinkContainer filterType="categoryFilter" filter="SHOW_ALL">
        Show all
      </FilterLinkContainer>
      {categoryFilters}
      <br />

      <FilterLinkContainer filterType="sortFilter" filter="SORT_BY_NAME_ASC">
        Sort by name (ascending)
      </FilterLinkContainer>
      {", "}
      <FilterLinkContainer filterType="sortFilter" filter="SORT_BY_NAME_DESC">
        Sort by name (descending)
      </FilterLinkContainer>
      {", "}
      <FilterLinkContainer filterType="sortFilter" filter="SORT_BY_DESCRIPTION_ASC">
        Sort by description (ascending)
      </FilterLinkContainer>
      {", "}
      <FilterLinkContainer filterType="sortFilter" filter="SORT_BY_DESCRIPTION_DESC">
        Sort by description (descending)
      </FilterLinkContainer>
      {", "}
    </div>
  );
};

export default Filters;
