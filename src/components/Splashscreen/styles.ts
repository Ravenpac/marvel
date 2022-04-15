import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    align-self: center;
    background: var(--red);
    width: 240px;
    height: 96px;
  }

  h1 {
    text-align: center;
    font-family: "Marvel";
    font-size: 6.25rem;
    color: #ffffff;
  }
`;
