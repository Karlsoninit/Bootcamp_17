import Type from "../types";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TODO:
      return [...state, payload];

    default:
      return state;
  }
};
