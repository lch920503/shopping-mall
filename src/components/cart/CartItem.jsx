import * as S from "./CartItem.styles";

export default function CartItem() {
  return (
    <S.CartProductContainer>
      <S.InputWrapper>
        <S.CartProductInput type="checkbox" />
      </S.InputWrapper>
      <S.CartProductWrapper>
        <S.CartProductImageWrapper>
          <S.CartProductImage src="images/image001.png" alt="product-img" />
        </S.CartProductImageWrapper>
      </S.CartProductWrapper>
      <S.CartProductCountWrapper>
        <S.CartProductCountBox>
          <S.MinusButton>
            <img src="/images/icon-minus-line.svg" alt="minus" />
          </S.MinusButton>
          <S.CountNum>5</S.CountNum>
          <S.PlusButton>
            <img src="/images/icon-plus-line.svg" alt="plus" />
          </S.PlusButton>
        </S.CartProductCountBox>
      </S.CartProductCountWrapper>
      <S.CartProductPriceWrapper>
        <S.TotalPrice></S.TotalPrice>
        <S.SubmitButton>주문하기</S.SubmitButton>
      </S.CartProductPriceWrapper>
      <S.ProductRemoveWrapper>
        <img src="/images/icon-delete.svg" alt="delete" />
      </S.ProductRemoveWrapper>
    </S.CartProductContainer>
  );
}
