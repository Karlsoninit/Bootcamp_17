import Type from "../types";

export const addTodo = todo => ({
  type: Type.TODO_ADD,
  payload: todo
});

export const delTodo = id => ({
  type: Type.TODO_DELETE,
  payload: id
});
