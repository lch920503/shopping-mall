import { Link } from "react-router-dom";
import * as S from "./ProductItem.styles";

export default function ProductItem({ product }) {
  const { id, name, provider, price, image } = product;

  return (
    <Link to={`/product/${id}`}>
      <S.ProductContainer>
        <S.ProductImage>
          <S.Image src={image} alt={name} />
        </S.ProductImage>
        <S.Store>
          <S.StoreText>{provider}</S.StoreText>
        </S.Store>
        <S.Product>
          <S.ProductText>{name}</S.ProductText>
        </S.Product>
        <div>
          <S.Price>{price.toLocaleString()}</S.Price>
          <S.Unit>원</S.Unit>
        </div>
      </S.ProductContainer>
    </Link>
  );
}
