import axios from "axios";

export const addToFB = async wish => {
  await axios.post("https://rn-todo-48cbb.firebaseio.com/wishes.json", wish);
};
