import React from 'react'
import PropTypes from 'prop-types'
// import PurchaseButton from './PurchaseButton'

const AccountCard = ({accountRecord, markPurchase}) => {

  // <PurchaseButton
  //   purchased={purchased}
  //   markPurchase={markPurchase}
  //   />

  const {name, accountNo, balance, createAt} = accountRecord
  // const purchasingStatusClass = purchased ? 'list-group-item list-group-item-action list-group-item-success' : 'list-group-item list-group-item-action list-group-item-danger'
  const purchasingStatusClass = ''

  return (
    <div className='row'>
      <div className="col-3">
      </div>
      <div className="col-6">
        <li className={purchasingStatusClass}>
          <div className='col-sm-7'>
            <h4>{name} <em>{balance}</em></h4>
            <em>{accountNo}</em>
          </div>
          <div className='col-sm-5'>
            <h6 className="text-right">{createAt}</h6>

          </div>
        </li>
      </div>
      <div className="col-3">
      </div>
    </div>


  )
}

AccountCard.propTypes = {
  accountRecord: PropTypes.object.isRequired,
  markPurchase: PropTypes.func.isRequired,
}

export default AccountCard
