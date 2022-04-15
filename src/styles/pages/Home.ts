import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1366px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1366px;
  }
`;

export const Content = styled.div`
  @media (min-width: 1000px) {
    padding: 5.875rem 8.4375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1000px) {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  align-items: center;

  div {
    align-self: center;
    background: var(--red);

    @media (min-width: 600px) {
      width: 15rem;
      height: 6rem;
    }

    @media (max-width: 600px) {
      width: 10rem;
      height: 4rem;
    }

    h1 {
      font-family: "Marvel";
      text-align: center;
      color: #ffffff;

      @media (min-width: 600px) {
        font-size: 6.25rem;
      }

      @media (max-width: 600px) {
        font-size: 4.25rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Axiforma";
    font-weight: 700;
    color: #ff0000;
    margin-top: 3.125rem;

    @media (min-width: 600px) {
      font-size: 1.875rem;
    }

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    margin-top: 0.875rem;
    margin-bottom: 1.3125rem;
    font-family: "Axiforma";
    font-weight: 300;
    color: var(--gray);

    @media (min-width: 600px) {
      font-size: 1.25rem;
    }

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5625rem;
  margin-bottom: 1.125rem;
  border-radius: 2.875rem;
  border: none;
  outline: none;
  background-color: #ffffff;

  @media (min-width: 600px) {
    height: 4.5625rem;
  }

  @media (max-width: 600px) {
    height: 3rem;
  }

  ::placeholder {
    font-family: "Axiforma";
    font-weight: 300;
    color: #d1d1d6;

    @media (min-width: 600px) {
      font-size: 1.375rem;
    }

    @media (max-width: 600px) {
      font-size: 1.125rem;
    }
  }
`;

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  outline: 1px solid var(--red);
  margin-right: 4px;

  @media (max-width: 600px) {
    display: none;
  }
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

  p {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Forgot = styled.div`
  border-bottom: 1px solid var(--red);
  padding-bottom: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 600px) {
    margin-left: 5rem;
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
  @media (min-width: 1000px) {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100vh;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
