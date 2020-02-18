import Type from "../types";

export const increment = value => ({
  type: Type.COUNTER_INCREMENT,
  payload: value
});

export const decrement = value => ({
  type: Type.COUNTER_DECREMENT,
  payload: value
});
