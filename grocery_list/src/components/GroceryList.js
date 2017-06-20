import React from 'react'
import PropTypes from 'prop-types'
import Table from './Table'
import TableBody from './elements/TableBody'
import TableHeader from './elements/TableHeader'

const GroceryList = ({ items, purchaseItem, removeItem }) => {
  const headers = ['Name', 'Quantity', 'Category', 'Description', 'Purchased', 'Remove']

  return (
    <Table>
    <TableHeader headers={headers} />
    <TableBody content={items} keys={headers} purchaseItem={purchaseItem} removeItem={removeItem} />
    </Table>
  )

}

GroceryList.propTypes = {
  items: PropTypes.array.isRequired
}

export default GroceryList
