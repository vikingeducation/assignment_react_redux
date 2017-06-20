import React from 'react'
import PropTypes from 'prop-types'
import GroceryItem from './GroceryItem'

const TableBody = ({ content, keys, purchaseItem, removeItem }) => {
  let rows = content.map((row) => {
    return <GroceryItem item={row} key={row.id} purchaseItem={purchaseItem} removeItem={removeItem} />
  })

  return (
    <tbody>
    {rows}
    </tbody>
  )
}

TableBody.propTypes = {
  type: PropTypes.string,
  values: PropTypes.array
}


export default TableBody
