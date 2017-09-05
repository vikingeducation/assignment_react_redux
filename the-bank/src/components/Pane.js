import React, { Component } from "react";
import AccountViewer from "./AccountViewer";

// class Pane extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     // let accounts = props.accounts;
//     console.log("this.props = ", this.props);
//     return (
//       <div className="col-12 col-md-6">
//         <h5>
//           {/* {accounts[0].name}'s Account */}
//         </h5>
//         {/* some select stuff here */}
//         <AccountViewerContainer />
//       </div>
//     );
//   }
// }
const Pane = ({ accounts }) => {
  // let accounts = props.accounts;
  console.log("accounts = ", accounts);
  return (
    <div className="col-12 col-md-6">
      <h5>{/* {accounts[0].name}'s Account */}</h5>
      {/* some select stuff here */}
      <AccountViewer />
      stuff
    </div>
  );
};
export default Pane;
