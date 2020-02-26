import React, { useContext } from "react";
import { WishContext } from "../context/wishContext";
const List = () => {
  const {
    state: { wishes },
    dispatch
  } = useContext(WishContext);
  return (
    <ul>
      {wishes.map(({ title, id }) => (
        <li key={id}>
          <h2>{title}</h2>
          <button
            onClick={() => dispatch({ type: "DELETE_WISH", payload: id })}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
