import React from "react";
import { NavLink } from "react-router-dom";
import { TopMenu, TopMenuItem } from "../css/StyledComponents";

const activeClassName = "active";
const links = [{ to: "/blog", title: "Blog" }];

export default function Links() {
  return (
    <TopMenu>
      {links.map((item, index) => {
        return (
          <TopMenuItem key={index}>
            <NavLink to={item.to} activeClassName={activeClassName}>
              {item.title}
            </NavLink>
          </TopMenuItem>
        );
      })}
    </TopMenu>
  );
}
