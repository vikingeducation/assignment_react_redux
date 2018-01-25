import React from 'react'
import SortLinkContainer from '../containers/SortLinkContainer'

const Sorters = () => (
  <div className='Sorters'>
    <SortLinkContainer sortType='SORT_BY_NAME_DESC'>
      Sort desc by name
    </SortLinkContainer>
      {' || '}
    <SortLinkContainer sortType='SORT_BY_NAME_ASC'>
      Sort asc by name
    </SortLinkContainer>
      {' || '}
    <SortLinkContainer sortType='SORT_BY_DESCRIPT_DESC'>
      Sort desc by description
    </SortLinkContainer>
      {' || '}
    <SortLinkContainer sortType='SORT_BY_DESCRIPT_ASC'>
      Sort asc by description
    </SortLinkContainer>
  </div>
)

export default Sorters
