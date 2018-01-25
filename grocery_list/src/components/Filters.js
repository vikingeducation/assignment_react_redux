import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

const Filters = () => (
  <div className='Filters'>
    <FilterLinkContainer filter='SHOW_PURCHASED'>
      Show All Purchased
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter='SHOW_NOT_PURCHASED'>
      Show Only Not Purchased
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter='SHOW_ALL_CATEGORIES'>
      Show All Categories
    </FilterLinkContainer>
  </div>
)

export default Filters
