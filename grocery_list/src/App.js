import React, { Component } from "react";

import Filter from "./TopLevel/Filter";
import List from "./TopLevel/List";
import AddItem from "./TopLevel/AddItem";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Filter />
				<List />
				<AddItem />
			</div>
		);
	}
}

export default App;
