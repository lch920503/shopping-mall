import * as S from "./CartTotalAmount.styles";

export default function CartTotalAmount() {
  return (
    <S.TotalAmountContainer>
      <S.TotalPriceWrapper>
        <S.TotalPriceText>총 상품금액</S.TotalPriceText>
        <S.TotalPrice>0</S.TotalPrice>
      </S.TotalPriceWrapper>
      <S.MinusBox>
        <S.MinusImage />
      </S.MinusBox>
      <S.DiscountPriceWrapper>
        <S.DiscountPriceText>상품 할인</S.DiscountPriceText>
        <S.DiscountPrice>0원</S.DiscountPrice>
      </S.DiscountPriceWrapper>
      <S.PlusBox>
        <S.PlusImage />
      </S.PlusBox>
      <S.DeliveryPriceWrapper>
        <S.DeliveryPriceText>배송비</S.DeliveryPriceText>
        <S.DeliveryPrice>0원</S.DeliveryPrice>
      </S.DeliveryPriceWrapper>

      <S.PaymentWrapper>
        <S.PaymentText>결제 예정 금액</S.PaymentText>
        <S.PaymentPrice>0</S.PaymentPrice>
      </S.PaymentWrapper>
    </S.TotalAmountContainer>
  );
}
