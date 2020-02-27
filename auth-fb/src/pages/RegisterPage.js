import React from "react";
import { connect } from "react-redux";
import Form from "../components/form/Form";
import { register } from "../redux/operations/authOperations";

const RegisterPage = () => {
  return <Form formName="Register" credential={register} />;
};

export default connect(null, { register })(RegisterPage);
