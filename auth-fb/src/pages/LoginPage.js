import React from "react";
import Form from "../components/form/Form";
import { useDispatch } from "react-redux";
import { login } from "../redux/operations/authOperations";
const LoginPage = () => {
  const dispatch = useDispatch();
  return <Form formName="Login" credential={dispatch(login)} />;
};

export default LoginPage;
