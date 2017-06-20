import React from 'react'
import Form from './Form'
import FormGroup from './elements/FormGroup'
import Select from './elements/Select'
import Label from './elements/Label'
import Input from './elements/Input'

const CreateTransaction = ({ accounts, activeAccount, createTransaction, setTransactionType, transactionType }) => {

  const transactionTypes = [
    { NULL: 'Select a Transaction' },
    { DEPOSIT: 'Deposit' },
    { WITHDRAWAL: 'Withdrawal' },
  ]


  return (
    <section id="create-transaction">
    <h4>Deposits and Withdrawals</h4>
    <Form className="mt-3" onSubmit={createTransaction}>
    <FormGroup classes="row">
    <Label text="Transaction Type" labelFor="type" classes="col-sm-12 col-md-2" />
      <div className="col-sm-12 col-md-4">
        <Select options={transactionTypes} defaultValue={'NULL'} name="type" />
      </div>
    </FormGroup>
    <FormGroup classes="row">
    <Label text="Amount" labelFor="amount" className="col-md-2 col-form-label" />
      <div className="col-sm-12 col-md-4">
        <Input type="number" step="0.01" min="0.01" name="amount" />
      </div>
    </FormGroup>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  </section>
  )

}

export default CreateTransaction
