import React from 'react'
import Form from './Form'
import Select from './elements/Select'

const Filter = ({ categoryFilter, purchasedFilter, filterCategory, filterPurchased, purchasedFilters, items }) => {

  let categoryFilters = [{ ALL: 'All' }]

  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (categoryFilters.indexOf(items[i].category) < 0) {
      categoryFilters.push({
        [item.category]: items[i].category
      })
    }
  }

  return (
    <Form>
    <Select options={categoryFilters} defaultValue={categoryFilter} onChange = { filterCategory } />
  <Select options={purchasedFilters} onChange={filterPurchased} defaultValue={purchasedFilter} />
 </Form>
  )
}

export default Filter
