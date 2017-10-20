import React, { Component } from "react";
import ListContainer from "./containers/List/ListContainer";
import Filter from "./components/filter/Filter";
import AddItemContainer from "./containers/AddItemContainer";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Filter />
				<ListContainer />
				<AddItemContainer />
			</div>
		);
	}
}

export default App;
