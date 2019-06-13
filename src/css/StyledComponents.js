import styled, { keyframes } from "styled-components";

export const MainContent = styled.div`
  background-color: #282c34;
  min-height: calc(100vh - var(--vh-fix, 0px) - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledLink = styled.a`
  color: yellowgreen;
  text-decoration: none;
`;

export const CenterTextDiv = styled.div`
  text-align: center;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(154, 205, 50, 0.61);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(154, 205, 50, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(154, 205, 50, 0);
  }
`;

export const StyledIcon = styled.img`
  animation: ${pulse} 2s ease-in-out;
  animation-iteration-count: infinite;

  height: 55px;
  background-color: yellowgreen;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 5px;
  line-height: 65px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeaderItem = styled.span`
  padding-left: 20px;
`;

export const CircularImg = styled.img`
  border-radius: 50%;
  pointer-events: none;
`;

export const StyledFooter = styled.footer`
  height: 20px;
  padding: 10px;
  background-color: #13151d;
  color: white;
  > a {
    text-decoration: none;
    color: inherit;
  }
`;
