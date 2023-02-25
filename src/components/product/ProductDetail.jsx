import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ProductDetail.styles";
import { useCartContext } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) =>
        setProduct(
          res.data.products.find((product) => product.id === parseInt(id))
        )
      );
  }, [id]);

  const { image, name, price, provider } = product;

  const handleCounterUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCounterDown = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  const [{ cart }, dispatch] = useCartContext();

  const handleAddCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        ...product,
        quantity: count,
      },
    });
  };

  return (
    <S.MainContainer>
      <S.ProductImageWrapper>
        <S.ProductImage src={image} alt={name} />
      </S.ProductImageWrapper>
      <S.ProductSection>
        <S.ProductInfoWrapper>
          <S.ProductSellerStore>{provider}</S.ProductSellerStore>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>
            {parseInt(price).toLocaleString()}
            <S.ProductUnit>원</S.ProductUnit>
          </S.ProductPrice>
        </S.ProductInfoWrapper>
        <S.DeliveryWrapper>
          <S.DeliveryInfo>택배배송 / 무료배송</S.DeliveryInfo>
        </S.DeliveryWrapper>
        <S.Line />
        <S.AmountWrapper>
          <S.CountButton onClick={handleCounterDown}>
            <S.Minus src="/images/icon-minus-line.svg" alt="minus" />
          </S.CountButton>
          <S.Count>
            <S.CountNum>{count}</S.CountNum>
          </S.Count>
          <S.CountButton onClick={handleCounterUp}>
            <S.Plus src="/images/icon-plus-line.svg" alt="plus" />
          </S.CountButton>
        </S.AmountWrapper>
        <S.Line />
        <S.SumContainer>
          <S.SumWrapper>
            <S.SumPrice>총 상품 금액</S.SumPrice>
          </S.SumWrapper>
          <S.TotalInfoContainer>
            <S.TotalInfoWrapper>
              총 수량 {""}
              <S.TotalCount>{count}개</S.TotalCount>
            </S.TotalInfoWrapper>
            <S.TotalPrice>
              {(count * price).toLocaleString()}
              <S.TotalPriceUnit>원</S.TotalPriceUnit>
            </S.TotalPrice>
          </S.TotalInfoContainer>
        </S.SumContainer>
        <S.ButtonWrapper>
          <S.BuyButton>바로구매</S.BuyButton>
          <S.CartButton onClick={handleAddCart}>장바구니</S.CartButton>
        </S.ButtonWrapper>
      </S.ProductSection>
    </S.MainContainer>
  );
}
