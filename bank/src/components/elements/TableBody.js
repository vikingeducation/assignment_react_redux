import React from 'react'
import PropTypes from 'prop-types'
import TransactionRow from './TransactionRow'

const TableBody = ({ records }) => {
  let rows = []
  if (records) {
    rows = records.map((record) => (
      <TransactionRow cols={record} key={record.id}/>
    ))
  }

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
