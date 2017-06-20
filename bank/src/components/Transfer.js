 import React from 'react'
 import Form from './Form'
 import FormGroup from './elements/FormGroup'
 import Select from './elements/Select'
 import Label from './elements/Label'
 import Input from './elements/Input'
 import { setupRecipientOptions } from '../helpers/select'

 const Transfer = ({ accounts, activeAccount, transferFunds }) => {

   let options = setupRecipientOptions(accounts, activeAccount)


   return (
     <section id="transferrals">
     <h4>Transferrals</h4>
     <Form onSubmit={transferFunds}>
      <FormGroup classes="row">
    <Label text="Amount" labelFor="amount" className="col-md-2 col-form-label" />
      <div className="col-sm-12 col-md-4">
        <Input type="number" step="0.01" min="0.01" name="amount" />
      </div>
    </FormGroup>
     <FormGroup classes="row">
    <Label text="Recipient Account" labelFor="to" className="col-md-2 col-form-label" />
    <div className="col-sm-12 col-md-8">
     <Select options={options} name="to"  />
    </div>
    </FormGroup>
    <button type="submit" className="btn btn-primary">Transfer</button>
    </Form>
    </section>
   )
 }


 export default Transfer
