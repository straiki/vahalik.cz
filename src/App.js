import React, { Fragment } from "react";
import "./css/App.css";
import { IndexPage } from "./IndexPage";
import Blog from "./Blog";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPost from "./BlogPost";
import SmallHeader from "./SmallHeader";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route
              path={"/blog/"}
              render={props => {
                return (
                  <Fragment>
                    <SmallHeader />
                    <Blog {...props} />
                  </Fragment>
                );
              }}
            />
            <Route path={"/:slug"} render={props => <BlogPost {...props} />} />
          </Switch>
        </Router>
      </div>
      <footer>
        Made with{" "}
        <span aria-label="Love" role="img">
          ❤️
        </span>{" "}
        using Font Awesome icons{" "}
        <a
          href="https://fontawesome.com/license"
          target="_blank"
          rel="noopener noreferrer"
          title="License"
        >
          <span aria-label="Thanks" role="img">
            🙏
          </span>
        </a>
      </footer>
    </div>
  );
}

export default App;
