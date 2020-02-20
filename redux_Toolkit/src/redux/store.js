import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./counter/counterReducer";
import { todo } from "./todo/todoReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({
  counter,
  todo
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares]
});
