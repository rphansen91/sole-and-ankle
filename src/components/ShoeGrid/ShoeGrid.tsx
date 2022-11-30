import styled from 'styled-components';
import SHOES from '../../data'
import { ShoeCard } from '../ShoeCard';

export const ShoeGrid = () => {
  return (
    <Grid>
      {SHOES.map((shoe => <ShoeCard shoe={shoe} key={shoe.slug} />))}
    </Grid>
  );
};

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`
