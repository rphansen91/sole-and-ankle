import styled from "styled-components";

export const ShoeSidebar = () => {
  return (
    <Wrapper>
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <Link href="/running" active>Running</Link>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/american">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Link = styled.a<{ active?: boolean }>`
display: block;
font-weight: var(--font-weight-medium);
color: ${props => props.active ? 'var(--primary)' : 'var(--gray-900)'};
font-size: ${16 / 16}rem;
line-height: ${32 / 16}rem;
text-decoration: none;

&:hover {
  text-decoration: revert;
}
`