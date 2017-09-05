import React from "react";

export default ({groceries}) => {
  return (
		<div>
	  	{groceries.map(grocery => {
	  		return (
	  			<div key={grocery.id} className="groceryItem">
	  				<h3>{grocery.name}</h3>
  					<div><strong>Quantity</strong>: {grocery.amount}</div>
  					<div><strong>Description</strong>: {grocery.description}</div>
  					<div><strong>Category</strong>: {grocery.category}</div>
	  			</div>
	  		)
	  	})}
	  </div>
  )
}
