import Type from "../types";

export const increment = function(value) {
  return {
    type: Type.COUNTER_INCREMENT,
    payload: { value }
  };
};

export const decrement = value => ({
  type: Type.COUNTER_DECREMENT,
  payload: { value }
});
