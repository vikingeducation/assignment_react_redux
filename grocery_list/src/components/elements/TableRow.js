import React, { PropTypes } from 'react'

const TableRow = ({ values, keys }) => {
  let cols = keys.map((key) => {
    key = key.toLowerCase()
    if (values.hasOwnProperty(key)) {
      if (key === 'purchased') {
        return (
          <td key={key}>{values[key]}</td>
        )
      } else {
        return <td key={key}>{values[key]}</td>
      }
    }
  })

  return (
    <tr>
    {cols}
    </tr>
  )
}

export default TableRow
