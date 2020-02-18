import React, { Component } from "react";
import { addTodo } from "../redux/todo/todoActions";
import { connect } from "react-redux";
import shortId from "shortid";

const initialState = { qwery: "" };

class Form extends Component {
  state = { ...initialState };

  handleChange = evt => {
    this.setState({
      qwery: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const createToDo = {
      id: shortId(),
      title: this.state.qwery
    };

    this.props.addTodo(createToDo);

    this.setState({
      ...initialState
    });
  };

  render() {
    const { qwery } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={qwery} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(Form);
