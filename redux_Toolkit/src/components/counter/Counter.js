import React from "react";

const Counter = ({ defaultValue, increment, decrement }) => {
  console.log(defaultValue);

  const incrementCount = function(e) {
    increment({ value: 1 });
  };

  return (
    <>
      <button onClick={incrementCount}>INCREMENT</button>
      <h2>{defaultValue}</h2>
      <button onClick={() => decrement({ value: 1 })}>DECREMENT</button>
    </>
  );
};

export default Counter;
