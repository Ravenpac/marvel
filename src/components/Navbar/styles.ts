import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 114px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 8px var(--red);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 53.5px;
  margin-right: auto;

  width: 122px;
  height: 54px;

  background: var(--red);
`;

export const Marvel = styled.text`
  font-family: "Marvel";
  color: #fff;
  font-size: 3.125rem;
  margin-top: 8px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 98px;
`;

export const Links = styled.ul`
  display: flex;
  gap: 86px;
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
    margin-left: 15px;
  }
`;
