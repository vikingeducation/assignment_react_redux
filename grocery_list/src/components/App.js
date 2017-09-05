import React from "react";
import GroceryList from "./GroceryList";

const App = props => {
  console.log(props, "passed down?");
  return (
    <div className="container">
      <h1>The Bestest Grocery App Ever</h1>
      <GroceryList {...props} />
    </div>
  );
};

export default App;
