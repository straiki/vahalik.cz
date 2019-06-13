import React from "react";
import SmallHeader from "./SmallHeader";

const layoutStyle = {};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <SmallHeader />
      {props.children}
    </div>
  );
}
