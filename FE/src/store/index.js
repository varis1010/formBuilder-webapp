import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import formReducer from "./reducers/formReducer";
import ReduxThunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
