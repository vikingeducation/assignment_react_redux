import React from 'react'
import Form from './Form'
import Select from './elements/Select'

const Filter = ({ categories, categoryFilter, purchasedFilter, filterCategory, filterPurchased, purchasedFilters }) => {

  return (
    <Form>
    <Select options={categories} defaultValue={categoryFilter} onChange = { filterCategory } />
  <Select options={purchasedFilters} onChange={filterPurchased} defaultValue={purchasedFilter} />
 </Form>
  )
}

export default Filter
