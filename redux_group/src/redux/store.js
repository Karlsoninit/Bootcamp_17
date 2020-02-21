import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { todoReducer } from "./todo/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer
});

export const store = createStore(rootReducer, devToolsEnhancer());
