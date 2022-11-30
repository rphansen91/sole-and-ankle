import styled from "styled-components";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import { IShoe } from "../../data";
import { Spacer } from "../Spacer";

export const ShoeCard = ({ shoe }: { shoe: IShoe }) => {
  const variant =
    typeof shoe.salePrice === "number"
      ? "on-sale"
      : isNewShoe(shoe.releaseDate)
      ? "new-release"
      : "default";

  return (
    <Link href={`/shoe/${shoe.slug}`}>
      <Card>
        <ImageWrapper>
          <img src={shoe.imageSrc} alt={shoe.name}></img>
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{shoe.name}</Name>
          <Price>{formatPrice(shoe.price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", shoe.numOfColors)}</ColorInfo>
        </Row>
      </Card>
    </Link>
  );
};

const Link = styled.a`
  --radius: 16px 16px 4px 4px;
  flex: 1 1 340px;
  text-decoration: none;
  color: inherit;
  outline-offset: 2px;
  border-radius: var(--radius);
`;

const Card = styled.article``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  line-height: 0;
  border-radius: var(--radius);
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const Name = styled.h3`
  font-weight: var(--font-weight-medium);
  color: var(--gray-900);
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: var(--gray-700);
`;

const SalePrice = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--primary);
`;