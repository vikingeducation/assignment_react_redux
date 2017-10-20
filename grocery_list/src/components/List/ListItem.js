/****************************
rendered by parent from itemsArray
Takes items object with keys:
  Category, Name, Description, Amount, Price, status
Structure: A form with inputs that are not active, filled with data from item object.
Features:  has 3 buttons.
Purchased, Remove, and edit.
On purchase click: change status of item to true,
On remove: remove item from list,
On edit: allows editing of form
*****************************/
import React from "react";
import PropTypes from "prop-types";
import Input from "../elements/Input";

const ListItem = ({ groceryList }) => {
	let list = groceryList.map((item, i) => {
		let { category, name, description, amount, price, status } = item;
		return (
			<form key={i}>
				<Input value={category} className="list_item" />
				<Input value={name} className="list_item" />
				<Input value={description} className="list_item" />
				<Input value={amount} className="list_item" />
				<Input value={price} className="list_item" />
			</form>
		);
	});

	console.log(list);
	return <div className="grocery_list">{list}</div>;
};

export default ListItem;
