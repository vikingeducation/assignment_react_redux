import React, { Component } from "react";

import Filter from "./TopLevel/Filter";
import List from "./TopLevel/List";
import AddItemContainer from "./containers/AddItemContainer";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Filter />
				<List />
				<AddItemContainer />
			</div>
		);
	}
}

export default App;
