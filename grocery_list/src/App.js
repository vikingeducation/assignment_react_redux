import React, { Component } from "react";

import Filter from "./TopLevel/Filter";
import List from "./TopLevel/List";
import AddItemContainer from "./containers/AddItemContainer";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="jumbotron">
					<h1 className="display-3 text-center">Shopping list</h1>
				</div>
				<Filter />
				<List />
				<AddItemContainer />
			</div>
		);
	}
}

export default App;
