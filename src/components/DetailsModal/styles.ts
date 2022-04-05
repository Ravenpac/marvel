import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  top: 37.8%;
  left: 14.6%;
  position: absolute;
  height: 27.43rem;
  width: 42.4rem;
  z-index: 1000;

  color: #fff;
  border-radius: 2rem;
  background: linear-gradient(to right, var(--red) 40%, var(--dark-red) 95%);

  transform: scale(1.3);
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.53125rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  font-family: "Axiforma";
  width: 17.6875rem;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 100;
  font-family: "Axiforma";
  width: 17.6875rem;
  line-height: 1.375rem;
`;

export const Movies = styled.div`
  padding: 1rem 0;
`;

export const MovieName = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: "Axiforma";
  width: 17.6875rem;
`;

export const Avaible = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  position: relative;
  margin-right: auto;
`;

export const Note = styled.h3`
  font-size: 1.625rem;
  font-weight: 400;
  font-family: "Axiforma";
  width: 17.6875rem;
  margin-top: 1rem;
`;
