import { createReducer } from "@reduxjs/toolkit";
import types from "../types";

export const todo = createReducer([], {
  [types.TODO_ADD]: (state, { payload }) => payload,
  [types.TODO_DELETE]: (state, { payload }) =>
    state.filter(todo => todo.publishedAt !== payload)
});
