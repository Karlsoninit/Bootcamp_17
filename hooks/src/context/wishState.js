import React, { useReducer } from "react";
import axios from "axios";
import { wishReducer } from "./wishReducer";
import { WishContext } from "./wishContext";

const initialState = {
  wishes: []
};

export const WishState = ({ children }) => {
  const [state, dispatch] = useReducer(wishReducer, initialState);

  const addToFB = async wish => {
    await axios.post("https://rn-todo-48cbb.firebaseio.com/wishes.json", wish);
    getToFB();
  };

  const getToFB = async () => {
    const data = await axios.get(
      "https://rn-todo-48cbb.firebaseio.com/wishes.json"
    );
    console.log(data);
    let transformData;
    if (data.data) {
      transformData = Object.keys(data.data).map(wish => ({
        ...data.data[wish],
        id: wish
      }));
    } else {
      transformData = [];
    }

    dispatch({ type: "ADD_WISH", payload: transformData });
  };

  console.log(state);

  return (
    <WishContext.Provider value={{ state, dispatch, addToFB, getToFB }}>
      {children}
    </WishContext.Provider>
  );
};
