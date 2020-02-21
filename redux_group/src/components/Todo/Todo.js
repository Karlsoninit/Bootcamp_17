import React, { Component } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import { addTodo, deleteTodo } from "../../redux/todo/todoActions";
import { todoPost, todoGet } from "../../redux/todo/todoOperations";

class Form extends Component {
  state = {
    title: "",
    description: ""
  };

  componentDidMount() {
    this.props.todoGet();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // this.props.addTodo({ ...this.state, id: shortId() });
    await this.props.todoPost(this.state);
    await this.props.todoGet();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h5>Todo list</h5>
          <input type="text" onChange={this.handleChange} name="title" />
          <input type="text" onChange={this.handleChange} name="description" />
          <button type="submit">add</button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   add: () => dispatch(addTodo)
// });

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  todoPost,
  todoGet
};

export default connect(null, mapDispatchToProps)(Form);
