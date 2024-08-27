import addItem from "./addItem";
import productReducer from "./product"
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItem,
    products: productReducer
})

export default rootReducers;