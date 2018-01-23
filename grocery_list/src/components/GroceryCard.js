import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from './elements/ListGroup'
import Button from './elements/Button'
import PurchaseButton from './PurchaseButton'

const GroceryCard = ({groceryItem, markPurchase}) => {

  const {name, description, amount, category, purchased} = groceryItem
  const purchasingStatusClass = purchased ? 'list-group-item list-group-item-action list-group-item-success' : 'list-group-item list-group-item-action list-group-item-danger'

  return (
    <div className='row'>
      <div className="col-3">
      </div>
      <div className="col-6">
        <li className={purchasingStatusClass}>
          <div className='col-sm-7'>
            <h4>{name} <em>{amount}</em></h4>
            <em>{description}</em>
          </div>
          <div className='col-sm-5'>
            <h6 className="text-right">{category}</h6>
            <PurchaseButton
              purchased={purchased}
              markPurchase={markPurchase}
              />

          </div>
        </li>
      </div>
      <div className="col-3">
      </div>
    </div>


  )
}

GroceryCard.propTypes = {
  groceryItem: PropTypes.object.isRequired,
  markPurchase: PropTypes.func.isRequired,
}

export default GroceryCard
