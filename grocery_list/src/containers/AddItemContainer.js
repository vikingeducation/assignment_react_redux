/****************************
contains additemform

Takes no props
*****************************/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddItemForm from "../components/AddItems/AddItemForm";
import { addItem, changeIcon } from "../actions";
import serialize from "form-serialize";
import { groceriesApp } from "../reducers";
//const onSubmit =
const iconToShow = status =>
	!status
		? {
				backgroundImage: "url(/static/media/plus.99b344d7.svg)"
			}
		: {
				backgroundImage: "url(/static/media/minus.c720b464.svg)"
			};

const mapStateToProps = (state, ownProps) => {
	return {
		formStatus: !state.iconStatus ? "none" : "flex",
		icon: iconToShow(state.iconStatus),
		showForm: state.iconStatus
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: e => {
			e.preventDefault();
			const form = e.target; //the addItem form
			const data = serialize(form, { hash: true });
			data.status = false;
			console.log("Data add item", data);
			dispatch(addItem(data));
			form.reset();
		},
		formToggleHandler: (e, status) => {
			e.preventDefault();
			dispatch(changeIcon(!status));
			document.getElementById("category_input").focus();
		}
	};
};

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(
	AddItemForm
);

AddItemContainer.propTypes = {};
export default AddItemContainer;
/**
// menu: form toggle  handler that
// 		changes icon
// 		shows form
// 		focuses on category input element
class AddItemContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { iconStatus: false };
	}

	//pass to presentational component
	// form: category from state
	// 			form submit handler

	onSubmit = e => {
		e.preventDefault();
		const form = e.target; //the addItem form
		const data = serialize(form, { hash: true });
		data.status = false;
		console.log("Data add item", data);
		addItem(data);
		form.reset();
	};

	formToggleHandler = (e, status) => {
		e.preventDefault();
		this.setState({
			iconStatus: !status
		});
		document.getElementById("category_input").focus();
	};

	render() {
		//toggles display of add-itemform
		let status = !this.state.iconStatus ? "none" : "flex";

		//determines icon to display based when menu open buton is clicked
		let icon = !this.state.iconStatus
			? {
					backgroundImage: "url(/static/media/plus.99b344d7.svg)"
				}
			: {
					backgroundImage: "url(/static/media/minus.c720b464.svg)"
				};
		console.log("icon", icon);
		return (
			<AddItemForm
				icon={icon}
				showForm={this.state.iconStatus}
				formStatus={status}
				formToggleHandler={this.formToggleHandler}
				onSubmit={this.onSubmit}
			/>
		);
	}
}
**/
