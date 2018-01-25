import React from 'react'
import PropTypes from 'prop-types'
import GroceryCard from './GroceryCard'
import Filters from './Filters'

const GroceryList = ({groceryList, markPurchase}) => {
  const pupulatedCards = groceryList.map((item) => (
    <GroceryCard
      groceryItem={item}
      key={item.id}
      markPurchase={() => markPurchase(item.id)}
    />
  ))

  return (

    <div className='container'>
      <Filters />
      <ul className="list-group">
        {pupulatedCards}
      </ul>
    </div>

  )
}

GroceryList.propTypes = {
  groceryList: PropTypes.array.isRequired
}

export default GroceryList
