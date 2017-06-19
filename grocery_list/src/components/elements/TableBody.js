import React, { PropTypes } from 'react'
import TableRow from './TableRow'
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
