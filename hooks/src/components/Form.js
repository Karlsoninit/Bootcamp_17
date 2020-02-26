import React, { useContext, useEffect, useState } from "react";
import shortId from "shortid";
import { WishContext } from "../context/wishContext";

const Form = () => {
  const [value, setValue] = useState("");

  const { addToFB, getToFB } = useContext(WishContext);

  useEffect(() => {
    getToFB();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const [input] = e.target.elements;

    if (input.value) {
      addToFB({ title: input.value });
    }

    input.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setValue(e.target.value)} />
    </form>
  );
};

export default Form;
