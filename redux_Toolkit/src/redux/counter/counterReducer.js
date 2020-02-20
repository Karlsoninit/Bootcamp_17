import { createReducer } from "@reduxjs/toolkit";
import Type from "../types";

export const counter = createReducer(0, {
  [Type.COUNTER_INCREMENT]: (state, { payload }) => {
    return state + payload.value;
  },
  [Type.COUNTER_DECREMENT]: (state, { payload }) => state - payload.value,
  DEFAULT: state => state
});
