/* @jsxImportSource styled-components */
"use client";
import styled from "styled-components";

export const Foote = styled.footer`
  @media (max-width: 520px) {
    margin: 0px 1rem;
    padding-top: 1rem;
    nav {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
  margin: 0px 4rem;
  border-top: 1px solid rgb(176, 224, 211);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 2rem 0px 0.5rem;
  height: 10rem;
  div {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 2rem;
      color: rgb(1, 135, 98);
      cursor: pointer;
      transition: all 0.2s ease 0s;
    }
  }
  nav {
    display: flex;
  }
  a {
    color: rgb(31, 31, 31);
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }
  p {
    font-size: 0.75rem;
    color: rgb(81, 81, 81);
  }
`;
