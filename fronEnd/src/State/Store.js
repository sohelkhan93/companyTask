import { createStore, combineReducers } from "redux";
import { CommonReducer } from "./Reducers/CommonReducer";

export const configStore = () => {
  const mystore = createStore(
    combineReducers({ CommonReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return mystore;
};
