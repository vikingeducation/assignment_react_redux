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
import ListItemsStatusButtonsContainer from "../../containers/List/ListItemsStatusButtonsContainer";

const ListItem = ({ groceryList }) => {
	let list = groceryList.map((item, i) => {
		let {
			category,
			name,
			description,
			amount = 0,
			price = 0,
			status,
			id
		} = item;
		return (
			<form key={id}>
				<div className="form-group d-flex mx-auto row">
					<Input
						value={category}
						status={status}
						className="list_item form-control col-2"
					/>
					<Input
						value={name}
						status={status}
						className="list_item form-control col-3"
					/>
					<textarea
						value={description}
						status={status}
						className="list_item form-control col-3"
					/>
					<Input
						value={amount}
						status={status}
						className="list_item form-control col-2"
					/>

					<Input
						value={price}
						status={status}
						icon="$"
						className="list_item form-control col-2"
					/>
					<ListItemsStatusButtonsContainer
						status={status}
						id={id}
						className=""
					/>
				</div>
			</form>
		);
	});

	return <div className="grocery_list mx-auto ">{list}</div>;
};

export default ListItem;
