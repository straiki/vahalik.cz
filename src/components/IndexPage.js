import * as React from "react";
import avatar from "../img/avatar_op.png";
import ln from "../img/linkedin-in-brands.svg";
import gh from "../img/github-brands.svg";
import email from "../img/envelope-regular.svg";

import { Link } from "react-router-dom";

import { StyledIcon, StyledLink, CircularImg } from "../css/StyledComponents";

export default function IndexPage() {
  return (
    <header>
      <CircularImg src={avatar} className="App-logo" alt="logo" />{" "}
      <h1>Tomáš Vahalík</h1>
      <p>Full-Stack Webdeveloper</p>
      <p>
        <Link to={"/blog"}>Blog</Link>
      </p>
      <p>
        <StyledLink
          href="https://www.linkedin.com/in/tomas-vahalik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src={ln} alt="LinkedIn" />
        </StyledLink>

        <StyledLink
          href="https://github.com/straiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src={gh} alt="Git Hub" />
        </StyledLink>

        <StyledLink
          href="mailto:webcontact@vahalik.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src={email} alt="E-mail me!" />
        </StyledLink>
      </p>
    </header>
  );
}
