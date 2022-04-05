import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 7.125rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0.5rem var(--red);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3.3475rem;
  margin-right: auto;

  width: 7.625rem;
  height: 3.375rem;

  background: var(--red);
`;

export const Marvel = styled.text`
  font-family: "Marvel";
  color: #fff;
  font-size: 3.125rem;
  margin-top: 0.5rem;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6.125rem;
`;

export const Links = styled.ul`
  display: flex;
  gap: 5.375rem;
  list-style: none;

  li {
    font-family: "Axiforma";
    font-weight: 700;
    font-size: 1.875rem;

    &:last-child {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
`;

interface SiteProps {
  isActive: boolean;
}

export const Site = styled.a<SiteProps>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#fff" : "#707070")};

  &:last-child {
    margin-left: 0.9375rem;
  }
`;
