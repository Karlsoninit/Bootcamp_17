import axios from "axios";
import { addTodo } from "./todoActions";

export const postTodo = post => async () => {
  try {
    const data = await axios.post(
      "https://rn-todo-48cbb.firebaseio.com/todo.json",
      post
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = () => async dispatch => {
  try {
    const data = await axios.get(
      "https://rn-todo-48cbb.firebaseio.com/todo.json"
    );
    console.log(data);

    const transformData = Object.keys(data.data).map(key => ({
      ...data.data[key],
      id: key
    }));

    dispatch(addTodo(transformData));
    console.log(transformData);
  } catch (error) {
    console.log(error);
  }
};
