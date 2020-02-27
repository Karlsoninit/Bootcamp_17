import React from "react";
import Form from "../components/form/Form";
import { connect } from "react-redux";
import { login } from "../redux/operations/authOperations";
const LoginPage = ({ login }) => {
  return <Form formName="Login" credential={login} />;
};

export default connect(null, { login })(LoginPage);
