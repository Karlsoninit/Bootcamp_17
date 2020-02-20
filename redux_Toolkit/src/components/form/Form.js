import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todo/todoActions";
import shortId from "shortid";
import { postTodo, getTodo } from "../../redux/todo/todoOperation";

const initialState = { qwery: "" };

class Form extends Component {
  state = { ...initialState };

  componentDidMount() {
    console.log("woooork");
    this.props.getTodo();
  }

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

    this.props.postTodo({ title: this.state.qwery });

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

// const mapStateToProps = state => ({});

// const mapDispatchToProps = () => ({
//   fetcher: () => {}
// });

export default connect(null, { addTodo, postTodo, getTodo })(Form);
