import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({});

let custom_config = {};

const middlewares = [applyMiddleware(thunk), offline(custom_config), sentryReduxEnhancer];

const enhancer = compose(...middlewares);

const store = createStore(reducers, enhancer);

export default store;
