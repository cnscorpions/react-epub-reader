import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(RootReducer, enhancer);

export default store;
