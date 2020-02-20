import React from "react";
import { connect } from "react-redux";
import { delTodo } from "../../redux/todo/todoActions";

const getTodos = state => state.todo;

const TodoList = ({ data, delTodo }) => (
  <ul>
    {data.map(({ title, id }) => {
      return (
        <li key={id}>
          <h2>{title}</h2>
          <button onClick={() => delTodo(id)}>DELETE</button>
        </li>
      );
    })}
  </ul>
);

const mSTP = state => ({
  data: getTodos(state)
});

export default connect(mSTP, { delTodo })(TodoList);
