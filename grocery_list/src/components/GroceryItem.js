import React, {PropTypes} from 'react';

const GroceryItem = ({groceryItem, onPurchased}) => {
  const {name, description, desiredAmount, currentAmount, category} = groceryItem;

  const purchasedStatus = desiredAmount === currentAmount;
  let color = purchasedStatus ? "red" : "blue";

  return (
    <div
      className="GroceryItem card"
      style={{maxWidth: '320px'}}
    >
      <div className="card-block" style=`background-color: ${color}`>
        <h4>{name}</h4>
        <p>Description: {description}</p>
        <p>Status: ({desiredAmount}/{currentAmount})</p>
        <p>Category: {category}<p>
        <button onClick={onPurchased}>Purchase</button>
      </div>
    </div>
  )

});

GroceryItem.propTypes = {
  onPurchased: PropTypes.func.isRequired,
  groceryItem: PropTypes.isRequired
}

export default GroceryItem;
