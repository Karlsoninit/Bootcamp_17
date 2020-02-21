import axios from "axios";
import { addTodo } from "./todoActions";

export const todoPost = todo => async dispatch => {
  const data = await axios.post(
    "https://rn-todo-48cbb.firebaseio.com/todos.json",
    todo
  );
  console.log(data);
};

export const todoGet = () => async dispatch => {
  const data = await axios.get(
    "https://rn-todo-48cbb.firebaseio.com/todos.json"
  );
  console.log(data.data);
  if (data.data) {
    const transData = Object.keys(data.data).map(item => ({
      ...data.data[item],
      id: item
    }));

    dispatch(addTodo(transData));
  }
  //   console.log(transData);
};

export const todoDelete = id => async dispatch => {
  await axios.delete(
    "https://rn-todo-48cbb.firebaseio.com/todos/" + id + ".json"
  );
  const data = await axios.get(
    "https://rn-todo-48cbb.firebaseio.com/todos.json"
  );
  console.log(data.data);
  if (data.data) {
    const transData = Object.keys(data.data).map(item => ({
      ...data.data[item],
      id: item
    }));
    dispatch(addTodo(transData));
  }
};
