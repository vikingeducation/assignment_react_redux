import React from 'react'
import Table from './Table'
import TableHeader from './elements/TableHeader'
import TableBody from './elements/TableBody'
import Form from './Form'
import FormGroup from './elements/FormGroup'
import Input from './elements/Input'
import Label from './elements/Label'

const TransactionHistory = ({ account, setDates, dates }) => {
  let transactions = account[0].transactions

  transactions = transactions.filter((transaction) => {
    if (dates.start && dates.end) {
      return transaction.date >= dates.start && transaction.date <= dates.end
    }
    if (dates.start) {
      return transaction.date >= dates.start
    }
    if (dates.end) {
      return transaction.date <= dates.end
    }
    return true
  })

  return (
    <section id="transaction-history">
    <h4>Transaction History</h4>
    <Form className="form-inline mb-1" onSubmit={setDates} >
    <Label text="Start" classes="mr-2" />
    <Input type="date" name="start" classes="mr-2"/>
    <Label text="End" classes="mr-2" />
    <Input type="date" name="end" />
    <button type="submit" className="btn btn-primary ml-1">Filter</button>
    </Form>
    <Table>
    <TableHeader headers={['Date', 'Transaction Type', 'Reference', 'Credit', 'Debit']} />
    <TableBody records={transactions} />
    </Table>
    </section>
  )
}

export default TransactionHistory
