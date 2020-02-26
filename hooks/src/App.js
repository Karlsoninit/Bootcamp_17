import React from "react";
import Form from "./components/Form";
import { WishState } from "./context/wishState";
import List from "./components/List";
const App = () => {
  return (
    <WishState>
      <Form />
      <List />
    </WishState>
  );
};

export default App;
