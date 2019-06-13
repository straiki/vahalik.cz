import React from "react";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <NavLink to={"/blog"} activeClassName={"active"}>
          Blog
        </NavLink>
      </li>
      {/*<li>*/}
      {/*  <NavLink to={"/blog"} activeClassName={"active"}>*/}
      {/*    Blog*/}
      {/*  </NavLink>*/}
      {/*</li>*/}
    </ul>
  );
}
