import React from "react";

import Home from "./home/Home";
import Blog from "./blog/Blog";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPost from "./blog/BlogPost";
import Layout from "./layout/Layout";

function App() {
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
          render={props => (
            <Layout component={BlogPost} withNavigation {...props} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
