import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from './elements/InputGroup'
import Input from './elements/Input'
import Button from './elements/Button'
import Select from './elements/Select'

const options=['Deposit', 'Withdraw', 'Transfer']

const Transactions = ({onSubmit}) => (
  <div className='row ' >
    <div className="col-3">
    </div>
    <div className="col-6 transactions" style={{border: '1px #bbb solid'}}>

    <br />
      <form className="container" onSubmit={onSubmit} >
        <InputGroup name="transaction" labelText="Select Transaction Type">
          <Select name='transaction' options={options} />
        </InputGroup>
        <InputGroup name="accountNoFrom" labelText="From Account Number">
          <Input name="accountNoFrom" />
        </InputGroup>
        <InputGroup name="accountNoTo" labelText="To Account Number">
          <Input name="accountNoTo" />
        </InputGroup>
        <InputGroup name="value" labelText="Amount">
          <Input name="value" />
        </InputGroup>
        <Button type="submit" color="primary">Process Transaction</Button>
      </form>

    </div>
    <div className="col-3">
    </div>
  </div>

)

Transactions.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Transactions
