import styled from "styled-components";
import { Breadcrumbs } from "../Breadcrumbs";
import { Select } from "../Select";
import { ShoeGrid } from "../ShoeGrid";
import { ShoeSidebar } from "../ShoeSidebar";
import { Spacer } from "../Spacer";

interface ShoeIndexProps {
  sortId: string;
  setSortId: (sortId: string) => void;
}

export const ShoeIndex = ({ sortId, setSortId }: ShoeIndexProps) => {
  return (
    <>
      <Wrapper>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Spacer size={32} />
          <ShoeSidebar />
        </LeftColumn>
        <Main>
          <Header>
            <Title>Running</Title>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </Header>
          <Spacer size={32} />
          <ShoeGrid />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  margin-right: auto;
  font-size: ${24 / 16}rem;
  line-height: ${24 / 16}rem;
  color: var(--gray-900);
  font-weight: var(--font-weight-medium);
`;

const LeftColumn = styled.aside`
  flex: 0 1 248px;
`;

const Main = styled.main`
  flex: 1 1 1100px;
`;
