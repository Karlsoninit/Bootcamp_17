import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser";

export const useRouter = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/createUser" component={CreateUser} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};
