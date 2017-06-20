import React from 'react'
import Form from './Form'
import FormGroup from './elements/FormGroup'
import Select from './elements/Select'
import Label from './elements/Label'

const SetActiveAccount = ({ accounts, activeAccount, setAccount }) => {
  let active
  accounts = accounts.filter((account) => {
    if (account.id === activeAccount) {
      active = account
    }
    return account.id !== activeAccount
  })
  accounts = accounts.map((account) => {
    return ({
      [account.id]: account.id + ' — $' + account.balance.toLocaleString()
    })
  })

  accounts.unshift({
    [active.id]: active.id + ' — $' + active.balance.toLocaleString()
  })


  return (
    <div>
    <Form className="form-inline">
    <FormGroup>
    <Label text="Account:" className="mr-1 font-weight-bold"/>
    <Select options={accounts} defaultValue={activeAccount} onChange={setAccount} />
    </FormGroup>
   </Form>
   </div>
  )

}

export default SetActiveAccount
