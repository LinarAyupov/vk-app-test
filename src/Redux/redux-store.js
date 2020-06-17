import mainReducer from "./main-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers(
    {
        mainData: mainReducer
    }
)

let store = createStore(reducers)
window.store = store
export default store;