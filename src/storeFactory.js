import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";

const initialValues = { value: 0 };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

function logger({ getState }) {
  return next => action => {
    console.log("will dispatch", action, getState());

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

export const store = createStore(
  rootReducer,
  initialValues,
  composeEnhancers(applyMiddleware(logger))
);
