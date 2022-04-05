import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
`;

export const Content = styled.div`
  padding: 94px 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 50%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  div {
    align-self: center;
    background: var(--red);
    width: 15rem;
    height: 6rem;

    h1 {
      font-family: "Marvel";
      font-size: 6.25rem;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Axiforma";
    font-weight: 700;
    font-size: 1.875rem;
    color: #ff0000;
    margin-top: 3.125rem;
  }

  h3 {
    margin-top: 0.875rem;
    margin-bottom: 1.3125rem;
    font-family: "Axiforma";
    font-weight: 300;
    font-size: 1.25rem;
    color: var(--gray);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4.5625rem;
  padding: 1.5625rem;
  margin-bottom: 1.125rem;
  border-radius: 2.875rem;
  border: none;
  outline: none;
  background-color: #ffffff;

  ::placeholder {
    font-size: 1.375rem;
    font-family: "Axiforma";
    font-weight: 300;
    color: #d1d1d6;
  }
`;

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  outline: 1px solid var(--red);
  margin-right: 4px;
`;

export const Choose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  width: 100%;
  color: var(--gray);
  margin-top: 0.625rem;
  font-family: "Axiforma";
  font-weight: 500;
`;

export const Forgot = styled.div`
  border-bottom: 1px solid var(--red);
  padding-bottom: 2px;
  margin-left: 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Login = styled.button`
  margin-top: 1.5rem;
  border: 0;
  border-radius: 2.875rem;
  width: 100%;
  height: 4rem;
  background: var(--red);
  color: #fff;
  font-size: 1.75rem;
  font-family: "Axiforma";
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const SignUp = styled.p`
  align-self: center;
  color: var(--gray);
  margin-top: 1.125rem;
  display: flex;
  gap: 4px;
  font-family: "Axiforma";
  font-weight: 500;
  font-size: 1rem;

  span {
    color: var(--red);

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

export const Image = styled.aside`
  height: 100vh;
  width: 50%;
  position: relative;
  right: 0;
`;
