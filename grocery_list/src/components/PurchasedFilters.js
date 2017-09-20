import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const PurchasedFilters = () => (
  <div>
    <FilterLinkContainer filter="SHOW_ALL">
      Show all
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_PURCHASED">
      Purchased
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_NOT_PURCHASED">
      Not purchased
    </FilterLinkContainer>
  </div>
);

export default PurchasedFilters;
