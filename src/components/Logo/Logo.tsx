import styled from "styled-components/macro";

export const Logo = () => {
  return (
    <Link href="/">
      <H1>Sole &amp; Ankle</H1>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
`;

const H1 = styled.h1`
  color: var(--gray-900);
  font-weight: var(--font-weight-bold);
  font-size: ${24 / 16}rem;
  line-height: ${24 / 16}rem;
`;
