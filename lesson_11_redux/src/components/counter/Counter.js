import React from "react";

const Counter = ({ defaultValue, increment, decrement }) => {
  console.log(defaultValue);

  const incrementCount = function(e) {
    console.log(e.target);
    increment(1);
  };

  return (
    <>
      <button onClick={incrementCount}>INCREMENT</button>
      <h2>{defaultValue}</h2>
      <button onClick={() => decrement(1)}>DECREMENT</button>
    </>
  );
};

export default Counter;
