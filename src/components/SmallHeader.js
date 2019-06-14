import * as React from "react";
import avatar from "../img/avatar_op.png";
import { Link } from "react-router-dom";
import Links from "./Links";

import { CircularImg, HeaderItem, StyledHeader } from "../css/StyledComponents";

function SmallHeader() {
  return (
    <StyledHeader>
      <HeaderItem>
        <Link to={"/"} title={"Home"}>
          <CircularImg src={avatar} className="App-logo" alt="logo" />{" "}
        </Link>
      </HeaderItem>
      <HeaderItem>
        <Links />
      </HeaderItem>
    </StyledHeader>
  );
}

export default SmallHeader;
