import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loadable from "react-loadable";
import { Spinner } from "./components/Spinner";

const LoadableHome = Loadable({
  loader: () => import("./pages/Home" /* webpackChunkName: 'Home' */),
  loading: Spinner
});

const LoadableNews = Loadable({
  loader: () => import("./pages/News" /* webpackChunkName: 'News' */),
  loading: Spinner
});

const LoadableNewsArticle = Loadable({
  loader: () =>
    import("./pages/NewsArticle" /* webpackChunkName: 'NewsArticle' */),
  loading: Spinner
});

const LazyAuth = lazy(() =>
  import("./pages/Auth" /* webpackChunkName: 'Auth' */)
);

export const useRouter = isAuthorization => {
  if (isAuthorization) {
    return (
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route exact path="/news/:article" component={LoadableNewsArticle} />
        <Route path="/news" component={LoadableNews} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route path="/register" component={LazyAuth} />
        <Redirect to="/register" />
      </Suspense>
    </Switch>
  );
};
