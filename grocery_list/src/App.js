import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './components/groceryList';
import AddItemForm from './components/addItemForm';
import FilterItemForm from './components/filterItemForm';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h2>The Super-Cool Grocery Store (What a steal!)</h2>
				</div>
				<AddItemForm />
				<hr />
				<FilterItemForm />
				<hr />
				<GroceryList />
			</div>
		);
	}
}

export default App;
