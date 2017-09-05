import React, { Component } from 'react';

class GroceryListContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <p>foo</p>;
	}
}

const MapStateToProps = state => {
	return {
		items: state.items
	};
};
