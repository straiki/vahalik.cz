import * as React from "react";
import avatar from "./img/avatar_op.png";
import { Link } from "react-router-dom";
import Links from "./Links";

function SmallHeader() {
  return (
    <header className={"blog-header"}>
      <span>
        <Link to={"/"}>
          <img src={avatar} className="App-logo" alt="logo" />{" "}
        </Link>
      </span>
      <span>
        <Links />
      </span>
    </header>
  );
}

export default SmallHeader;
