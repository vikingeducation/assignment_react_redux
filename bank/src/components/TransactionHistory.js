import React from 'react'
import Table from './Table'
import TableHeader from './elements/TableHeader'
import TableBody from './elements/TableBody'

const TransactionHistory = ({ account }) => {

  let transactions = account[0].transactions

  return (
    <section id="transaction-history">
    <h4>Transaction History</h4>
    <Table>
    <TableHeader headers={['Date', 'Transaction Type', 'Reference', 'Credit', 'Debit']} />
    <TableBody records={transactions} />
    </Table>
    </section>
  )
}

export default TransactionHistory
