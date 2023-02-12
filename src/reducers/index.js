import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({});

const middlewares = [applyMiddleware(thunk)];

const enhancer = compose(...middlewares);

const store = createStore(reducers, enhancer);

export default store;
