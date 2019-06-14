import React from "react";
import styled, { keyframes } from "styled-components";

const ringAnimation = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg);
}
`;

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  //noinspection CssOverwrittenProperties
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    border-color: #fff transparent transparent transparent;
    animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  );
}
