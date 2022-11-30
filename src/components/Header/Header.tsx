import { PropsWithChildren } from "react";
import styled from "styled-components/macro";

import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <FlexGrow>
          <Logo />
        </FlexGrow>
        <Nav>
          <NavList>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new-releases">New Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </NavList>
        </Nav>
        <FlexGrow />
      </Inner>
    </Wrapper>
  );
};

const NavLink = ({ href, children }: PropsWithChildren<{ href?: string }>) => {
  return (
    <NavListItem>
      <a href={href}>{children}</a>
    </NavListItem>
  );
};

const FlexGrow = styled.div`
  flex: 1;
`;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
`;

const Inner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 48px;
`;

const NavListItem = styled.li`
  font-weight: var(--font-weight-medium);
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
  text-transform: uppercase;
  color: var(--gray-900);

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: revert;
    }
  }
`;
