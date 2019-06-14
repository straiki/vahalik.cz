import React from "react";
import { NavLink } from "react-router-dom";
import { TopMenu } from "../css/StyledComponents";

export default function Links() {
  return (
    <TopMenu>
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
    </TopMenu>
  );
}
