import React from "react";
import { connect } from "react-redux";
// import { deleteTodo } from "../../redux/todo/todoActions";
import { todoDelete } from "../../redux/todo/todoOperations";

const TodoList = ({ todos, todoDelete }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(({ title, description, id }) => (
        <li key={id}>
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <button
            className="delBtn"
            id={id}
            onClick={e => todoDelete(e.target.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { todoDelete })(TodoList);
