import React, { Fragment } from "react";

import IndexPage from "./components/IndexPage";
import Blog from "./components/Blog";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import { GlobalStyle } from "./css/GlobalStyle";
import * as MyComponents from "./css/StyledComponents";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MyComponents.CenterTextDiv>
        <MyComponents.MainContent>
          <Router>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route
                path={"/blog/"}
                render={props => {
                  return (
                    <Layout>
                      <Blog {...props} />
                    </Layout>
                  );
                }}
              />
              <Route
                path={"/:slug"}
                render={props => (
                  <Layout>
                    <BlogPost {...props} />
                  </Layout>
                )}
              />
            </Switch>
          </Router>
        </MyComponents.MainContent>
        <Footer />
      </MyComponents.CenterTextDiv>
    </Fragment>
  );
}

export default App;
