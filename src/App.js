import React, { useEffect } from "react";

import Home from "./home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

import { fetchPostsIfNeeded } from "./store/actions";
import { connect, useDispatch } from "react-redux";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";

function App() {
  const dispatch = useDispatch();
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
            return <Layout component={Blog} withNavigation {...props} />;
          }}
        />
        <Route
          path={"/:slug"}
          render={props => {
            return <Layout component={BlogPost} withNavigation {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default connect()(App);
