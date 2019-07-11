import React, { useEffect } from "react";

import Home from "./home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import BlogContainer from "./blog/BlogContainer";
import BlogPostContainer from "./blog/BlogPostContainer";
import { fetchPostsIfNeeded } from "./store/actions";
import { connect } from "react-redux";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchPostsIfNeeded());
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Layout component={Home} {...props} />;
          }}
        />
        <Route
          path={"/blog/"}
          render={props => {
            return (
              <Layout component={BlogContainer} withNavigation {...props} />
            );
          }}
        />
        <Route
          path={"/:slug"}
          render={props => {
            return (
              <Layout component={BlogPostContainer} withNavigation {...props} />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default connect()(App);
