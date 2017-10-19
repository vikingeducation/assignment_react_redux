import React, { Component } from "react";
import ListContainer from "./containers/List/ListContainer";
import logo from "./logo.svg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ListContainer />
			</div>
		);
	}
}

export default App;
