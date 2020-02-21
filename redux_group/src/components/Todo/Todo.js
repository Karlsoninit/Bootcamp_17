import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todo/todoActions";
import shortId from "shortid";

class Form extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: shortId() });
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
  addTodo
};

export default connect(null, mapDispatchToProps)(Form);
