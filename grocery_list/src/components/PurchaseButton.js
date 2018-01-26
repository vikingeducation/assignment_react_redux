import React from 'react';
import PropTypes from 'prop-types';
import Button from './elements/Button'


const PurchaseButton = ({purchased, markPurchase}) => {
  if (purchased) {
    return <p style={{color: '#999'}} >Purchased</p>
  } else {
    return (
      <Button color='success' size='sm' onClick={markPurchase}>
        Mark purchase
      </Button>
    )
  }
}

PurchaseButton.propTypes = {
  purchased: PropTypes.bool.isRequired,
  markPurchase: PropTypes.func.isRequired
}

export default PurchaseButton
