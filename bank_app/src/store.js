import { createStore } from "redux";
import {bankApp} from "./reducers"

const store = createStore(bankApp);

export default store;