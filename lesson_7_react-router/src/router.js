import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";

export const useRouter = isAuthorization => {
  if (isAuthorization) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:article" component={NewsArticle} />
        <Route path="/news" component={News} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Redirect to="/register" />
    </Switch>
  );
};
