import React, {PropTypes} from 'react';


const GroceryList = ({puppies, adoptPuppy}) => {
  // Generate the groceryItem card for each groceryItem
  const groceryItemList = puppies.map((groceryItem) => (
    <GroceryItem
      groceryItem={groceryItem}
      onPurchased={() => adoptPuppy(groceryItem.id)}
    />
  ))
  const noPuppies = (
    <p className="text-muted">Oops no puppies...</p>
  )

  // Using Bootstrap 4 card layout
  return (
    <div className="GroceryList container">
      <h1>Our Puppies</h1>
      <Filters />
      <div className="card-deck">
        {puppies.length > 0 ? groceryItemList : noPuppies}
      </div>
    </div>
  )
}

GroceryList.propTypes = {
  puppies: PropTypes.array.isRequired,
  adoptPuppy: PropTypes.func.isRequired,
}

export default GroceryList
