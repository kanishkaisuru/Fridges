import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { itemAddReducer, itemRemoveReducer } from "./reducers/itemAddReducers";
import {itemListReducer} from './reducers/itemReducers';

const initalState = {};
const reducer = combineReducers({
    itemList: itemListReducer,
    addItem: itemAddReducer,
    removeItem: itemRemoveReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initalState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
