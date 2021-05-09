import React, { Component } from "react";

import Filter from "./TopLevel/Filter";
import List from "./TopLevel/List";
import AddItemContainer from "./containers/AddItemContainer";
import Header from "./components/Header";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<AddItemContainer />
				<Filter />
				<List />
			</div>
		);
	}
}

export default App;
