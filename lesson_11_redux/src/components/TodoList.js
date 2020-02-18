import React from "react";
import { connect } from "react-redux";
import { delTodo } from "../redux/todo/todoActions";
const TodoList = ({ data, delTodo }) => (
  <ul>
    {data.map(({ title, id }) => (
      <li key={id}>
        <h2>{title}</h2>
        <button onClick={() => delTodo(id)}>delete : {title}</button>
      </li>
    ))}
  </ul>
);

const mSTP = state => ({
  data: state.todo
});

export default connect(mSTP, { delTodo })(TodoList);
