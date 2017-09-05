import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './components/groceryList';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h2>The Super-Cool Grocery Store (What a steal!)</h2>
				</div>
				<GroceryList {...this.state} />
			</div>
		);
	}
}

export default App;
