import React from "react";
import { StyledFooter } from "../styledComponents/StyledComponents";

export default function Footer() {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
}
