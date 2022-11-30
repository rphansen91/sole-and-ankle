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

  const StyledShoeTag = ShoeTags[variant];

  return (
    <Link href={`/shoe/${slug}`}>
      <Card>
        <ImageWrapper>
          <img src={imageSrc} alt={name}></img>
        </ImageWrapper>
        <StyledShoeTag />
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price variant={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          <SalePrice variant={variant}>{formatPrice(salePrice)}</SalePrice>
        </Row>
      </Card>
    </Link>
  );
};

const ShoeTag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 8px;
  border-radius: 2px;
  line-height: 0;
  
  &:after {
    color: var(--white);
    font-weight: 700;
    font-size: ${14 / 16}rem;
    line-height: ${16 / 16}rem;
  }
`;

const ShoeTagOnSale = styled(ShoeTag)`
  background-color: var(--primary);
  &:after {
    content: "Sale";
  }
`;

const ShoeTagNewRelease = styled(ShoeTag)`
  background-color: var(--secondary);
  &:after {
    content: "Just Released!";
  }
`;

const ShoeTags = {
  "on-sale": ShoeTagOnSale,
  "new-release": ShoeTagNewRelease,
  default: ShoeTag,
};

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

const Price = styled.span<{ variant?: string }>`
  ${isOnSale(`text-decoration: line-through`)};
`;

const ColorInfo = styled.p`
  color: var(--gray-700);
`;

const SalePrice = styled.span<{ variant?: string }>`
  display: none;
  ${isOnSale(`display: initial`)};
  font-weight: var(--font-weight-medium);
  color: var(--primary);
`;

function isOnSale(style: string) {
  return (props: { variant?: string }) =>
    props.variant === "on-sale" ? style : "";
}
