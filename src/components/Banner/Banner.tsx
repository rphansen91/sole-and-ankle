import styled from "styled-components";
import { IconInput } from "../IconInput";
import { Icon } from "../Icon";

export const Banner = () => {
  return (
    <Wrapper>
      <Message>Free shipping on domestic orders over $75!</Message>
      <IconInput placeholder="Search..." />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" size={24} strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  background: var(--gray-900);
  color: var(--white);
  padding: 8px 32px;
  gap: 32px;
`;

const Message = styled.p`
  font-weight: var(--font-weight-normal);
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
  color: var(--white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const UnstyledButton = styled.button`
  background: transparent;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  align-self: center;
`;
