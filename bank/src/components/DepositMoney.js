import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from './elements/InputGroup'
import Input from './elements/Input'
import Button from './elements/Button'

const DepositMoney = ({onSubmit}) => (
  <div className='row' >
    <div className="col-3">
    </div>
    <div className="col-6" style={{border: '1px #bbb solid'}}>

    <br />
      <form className="container" onSubmit={onSubmit} >
        <h4>Deposit Money</h4>
        <InputGroup name="accountNo" labelText="Account Number">
          <Input name="accountNo" />
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

DepositMoney.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default DepositMoney
