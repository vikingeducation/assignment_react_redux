/****************************
contains all list components
Passes in
items array
total number
Onclick for purchase(toggle), remove, and edit
*****************************/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListHeaderContainer from "./ListHeaderContainer";
import ListItemsContainer from "./ListItemsContainer";
import ListItemsStatusButtonsContainer from "./ListItemsStatusButtonsContainer";
import ListTotalContainer from "./ListTotalContainer";
class ListContainer extends Component {
	render() {
		return (
			<div className="ListContainer">
				<ListHeaderContainer />
				<ListItemsContainer />
				<ListItemsStatusButtonsContainer />
				<ListTotalContainer />
			</div>
		);
	}
}
ListHeaderContainer.propTypes = {};
export default ListContainer;
