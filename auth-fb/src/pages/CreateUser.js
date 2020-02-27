import React from "react";
import Form from "../components/form/Form";
import { connect } from "react-redux";
import { createUser } from "../redux/operations/authOperations";

const CreateUser = ({ createUser }) => {
  return <Form formName="Login" credential={createUser} />;
};

export default connect(null, { createUser })(CreateUser);
