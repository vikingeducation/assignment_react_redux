import React from 'react'
import PropTypes from 'prop-types'
import GroceryCard from './GroceryCard'

const GroceryList = ({grocery, markPurchase}) => {

  console.log(grocery[4])
  const groceryList = grocery.map((item) => (
    <GroceryCard
      groceryItem={item}
      key={item.id}
      markPurchase={() => markPurchase(item.id)}
    />
  ))

  return (

    <div className='container'>
      <ul className="list-group">
        {groceryList}
      </ul>
    </div>

  )
}

GroceryList.propTypes = {
  grocery: PropTypes.array.isRequired
}

export default GroceryList
