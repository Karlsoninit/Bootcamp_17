import Type from "../types";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TODO:
      return payload;

    case Type.DELETE_TODO:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};
