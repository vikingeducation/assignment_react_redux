import React from 'react'

const GroceryItem = ({ item, purchaseItem, removeItem }) => {
  let purchased
  if (item.purchased === 'TRUE') {
    purchased = <input type="checkbox" name="purchased" defaultChecked data-id={item.id} />
  } else {
    purchased = <input type="checkbox" name="purchased" data-id={item.id} />
  }

  return (
    <tr>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
    <td>{item.category}</td>
    <td>{item.description}</td>
    <td>
      <form onChange={purchaseItem}>
      {purchased}
      </form>
    </td>
    <td>
    <a href="#" className="btn btn-danger" onClick={removeItem} data-id={item.id} >Remove Item</a>
    </td>
    </tr>
  )
}

export default GroceryItem
