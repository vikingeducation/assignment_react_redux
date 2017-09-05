import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store.js";
import {Provider} from "react-redux";

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

// let unsubscribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(selectAccount(2));

// store.dispatch(depositToAccount(1, 100000000));

// store.dispatch(withdrawFromAccount(3, 50));

// store.dispatch(transfer({ from: 1, to: 3, amount: 500 }));

// store.dispatch(setFilterStart(new Date(2000, 3, 6)));

// store.dispatch(setFilterEnd(new Date(2018, 0, 1)));

// unsubscribe();