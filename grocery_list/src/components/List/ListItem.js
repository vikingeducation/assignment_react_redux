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
import ListItemBtnContainer from "../../containers/List/ListItemBtnContainer";

const ListItem = ({ groceryList }) => {
	let list = groceryList.map((item, i) => {
		let { category, name, description, amount, price, status } = item;
		return (
			<form key={i}>
				<Input value={category} status={status} className="list_item" />
				<Input value={name} status={status} className="list_item" />
				<Input value={description} status={status} className="list_item" />
				<Input value={amount} status={status} className="list_item" />
				<Input value={price} status={status} className="list_item" />
				<ListItemBtnContainer />
			</form>
		);
	});

	return <div className="grocery_list">{list}</div>;
};

export default ListItem;
