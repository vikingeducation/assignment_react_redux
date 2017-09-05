import React, { Component } from "react";
// import AccountViewer from "./AccountViewer";
import AccountViewerContainer from "../containers/AccountViewerContainer";

class Pane extends Component {
  render() {
    return (
      <div className="col-12 col-md-6">
        <h5>
          {/* {accounts[0].name}'s Account */}
        </h5>
        {/* some select stuff here */}
        <AccountViewerContainer />
      </div>
    );
  }
}
export default Pane;
