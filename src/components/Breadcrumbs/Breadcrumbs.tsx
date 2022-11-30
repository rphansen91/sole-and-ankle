import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Breadcrumbs = ({ children }: PropsWithChildren) => {
  return (
    <nav>
      <List>
        {children}
      </List>
    </nav>
  );
};

const List = styled.ol`

`

const ListItem = styled.li`
  display: inline;
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
  color: var(--gray-700);
  font-weight: var(--font-weight-normal);

  &:after {
    content: '/';
    margin: 0 4px;
  }

  &:last-of-type:after {
    content: '';
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: var(--gray-900);
      text-decoration: revert;
    }
  }
`

Breadcrumbs.Crumb = ({ children, href }: PropsWithChildren<{ href?: string }>) => {
  return <ListItem><a href={href}>{children}</a></ListItem>
}