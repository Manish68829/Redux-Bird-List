import { createStore } from "redux";
import birdReducer from "./redux/reducers";
const store=createStore(birdReducer);

export default store;