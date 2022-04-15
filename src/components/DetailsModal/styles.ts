import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  top: 37.8%;
  left: 14.6%;
  position: absolute;
  height: 439px;
  width: 678.5px;
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
  margin-left: 40.5px;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  font-family: "Axiforma";
  width: 283px;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 100;
  font-family: "Axiforma";
  width: 283px;
  line-height: 22px;
`;

export const Movies = styled.div`
  padding: 16px 0;
`;

export const MovieName = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: "Axiforma";
  width: 283px;
`;

export const Avaible = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  position: relative;
  margin-right: auto;
`;

export const Note = styled.h3`
  font-size: 1.625rem;
  font-weight: 400;
  font-family: "Axiforma";
  width: 283px;
  margin-top: 16px;
`;
