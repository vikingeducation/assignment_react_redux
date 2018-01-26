import React from 'react'
import PropTypes from 'prop-types'

const AccountCard = ({accountRecord, markPurchase}) => {

  const {name, accountNo, balance, createAt} = accountRecord
  const AccountClass = 'list-group-item list-group-item-action account-row'

  return (
    <div className='row'>
      <div className="col-2">
      </div>
      <div className="col-8">
        <li className={AccountClass}>
          <div className='col-sm-9'>
          <b>Name:</b>{name}<br/>
          <b>Account Number:</b>{ accountNo}<br/>
          <b>Created at:</b>{createAt.toLocaleString()}<br/>
          </div>
          <div className='col-sm-3'>
          <h5>${balance}</h5>
          </div>
        </li>
      </div>
      <div className="col-2">
      </div>
      <br />
    </div>
  )
}

AccountCard.propTypes = {
  accountRecord: PropTypes.object.isRequired,
  markPurchase: PropTypes.func.isRequired,
}

export default AccountCard
