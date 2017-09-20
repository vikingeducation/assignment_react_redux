import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading="Groceries App"
          lead="Awesome"
        />
      </div>
    );
  }
}

export default App;
