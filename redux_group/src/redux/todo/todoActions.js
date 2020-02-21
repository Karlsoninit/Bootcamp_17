import Type from "../types";

export const addTodo = value => {
  return {
    type: Type.ADD_TODO,
    payload: value
  };
};

export const deleteTodo = id => {
  return {
    type: Type.DELETE_TODO,
    payload: { id }
  };
};
