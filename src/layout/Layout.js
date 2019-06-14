import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { MainContent } from "../styledComponents/StyledComponents";
import { GlobalStyle } from "../styledComponents/GlobalStyle";

export default function Layout(props) {
  const { component: Component } = props;
  return (
    <>
      <GlobalStyle />
      <MainContent>
        {props.withNavigation && <Navigation />}
        <Component {...props} />
      </MainContent>
      <Footer />
    </>
  );
}
