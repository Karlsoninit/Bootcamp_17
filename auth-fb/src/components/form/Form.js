import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./form.module.css";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: ""
};

// const classes = useStyles();

export default class Form extends Component {
  state = { ...initialState };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.credential(this.state);

    this.setState({ ...initialState });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log("formName", this.props.formName);
    const { email, password, firstName, lastName } = this.state;
    return (
      <form
        className={[styles.container].join(" ")}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          style={{ marginBottom: 10 }}
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          color="secondary"
          value={email}
          onChange={this.handleChange}
        />
        <TextField
          style={{ marginBottom: 10 }}
          id="password"
          label="password"
          variant="outlined"
          color="secondary"
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        {this.props.formName === "Register" && (
          <>
            <TextField
              style={{ marginBottom: 10 }}
              name="lastName"
              label="LastName"
              variant="outlined"
              color="secondary"
              value={lastName}
              type="text"
              onChange={this.handleChange}
            />
            <TextField
              style={{ marginBottom: 10 }}
              label="FirstName"
              variant="outlined"
              color="secondary"
              name="firstName"
              type="text"
              value={firstName}
              onChange={this.handleChange}
            />
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disableElevation
        >
          {this.props.formName}
        </Button>
      </form>
    );
  }
}
