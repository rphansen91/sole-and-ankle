import { CSSProperties } from "react";
import styled from "styled-components";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import { Spacer } from "../Spacer";

interface ShoeCardProps {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice?: number | null;
  releaseDate: number;
  numOfColors: number;
}

export const ShoeCard = ({
  name,
  slug,
  imageSrc,
  price,
  numOfColors,
  salePrice,
  releaseDate,
}: ShoeCardProps) => {
  const variant =
    typeof salePrice === "number"
      ? "on-sale"
      : isNewShoe(releaseDate)
      ? "new-release"
      : "default";

  return (
    <Link href={`/shoe/${slug}`}>
      <Card>
        <ImageWrapper>
          <img src={imageSrc} alt={name}></img>
        </ImageWrapper>
        {variant === 'on-sale' ? <ShoeTagOnSale>Sale</ShoeTagOnSale> : null}
        {variant === 'new-release' ? <ShoeTagNewRelease>Just Released!</ShoeTagNewRelease> : null}
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price style={{ 
            '--color': variant === 'on-sale' ? 'var(--gray-700)' : '',
            '--text-decoration': variant === 'on-sale' ? 'line-through' : '',
          } as CSSProperties}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === 'on-sale' ? <SalePrice>{formatPrice(salePrice)}</SalePrice> : null}
        </Row>
      </Card>
    </Link>
  );
};

const ShoeTag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 0 8px;
  border-radius: 2px;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  font-size: ${14 / 16}rem;
  line-height: 32px;
`;

const ShoeTagOnSale = styled(ShoeTag)`
  background-color: var(--primary);
`;

const ShoeTagNewRelease = styled(ShoeTag)`
  background-color: var(--secondary);
`;

const Link = styled.a`
  --radius: 16px 16px 4px 4px;
  flex: 1 1 340px;
  text-decoration: none;
  color: inherit;
  outline-offset: 2px;
  border-radius: var(--radius);
`;

const Card = styled.article`
  position: relative;
`;

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

const Price = styled.span`
  text-decoration: var(--text-decoration);
  color: var(--color);
`;

const ColorInfo = styled.p`
  color: var(--gray-700);
`;

const SalePrice = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--primary);
`;

