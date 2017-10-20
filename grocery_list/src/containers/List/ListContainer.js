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
import ListHeader from "../../components/List/ListHeader";
import ListItemsContainer from "./ListItemsContainer";
import ListTotalContainer from "./ListTotalContainer";

class ListContainer extends Component {
	render() {
		return (
			<div className="ListContainer">
				<ListHeader />
				<ListItemsContainer />
				<ListTotalContainer />
			</div>
		);
	}
}
ListContainer.propTypes = {};
export default ListContainer;
