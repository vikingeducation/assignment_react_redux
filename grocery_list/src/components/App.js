import React, { Component } from "react";
import TableContainer from "../containers/TableContainer";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TableContainer />
      </div>
    );
  }
}

export default App;
