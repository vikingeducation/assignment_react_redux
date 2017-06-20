import React from 'react'
import { dateToString } from '../../helpers/date'

const TransactionRow = ({ cols }) => {

  return (
    <tr key={cols.id}>
    <td>{dateToString(cols.date)}</td>
    <td>{cols.type}</td>
    <td>{cols.associatedAccount}</td>
    <td>{cols.amount > 0 ? '$' + cols.amount.toLocaleString() : ''}</td>
    <td>{cols.amount < 0 ? '$' + cols.amount.toLocaleString().slice(1) : '' }</td>
    </tr>
  )

}

export default TransactionRow
