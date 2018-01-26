import React from 'react'
import PropTypes from 'prop-types'
import AccountCard from './AccountCard'


const AccountsList = ({accountList, markPurchase}) => {
  const pupulatedAcc = accountList.map((record) => (
    <AccountCard
      accountRecord={record}
      key={record.id}
      markPurchase={() => markPurchase(record.id)}
    />
  ))

  return (

    <div className='container'>
      <ul className="list-group">
        {pupulatedAcc}
      </ul>
    </div>

  )
}

AccountsList.propTypes = {
  accountList: PropTypes.array.isRequired
}

export default AccountsList
