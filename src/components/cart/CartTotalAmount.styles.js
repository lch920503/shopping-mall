import styled from "styled-components";

export const TotalAmountContainer = styled.div`
  display: flex;
  height: 150px;
  padding: 0 15px;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 35px;
  align-items: center;
`;

export const TotalPriceWrapper = styled.div`
  width: calc(100% / 6);
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: calc((100% - 20px) / 4);
  }
`;
export const TotalPriceText = styled.p`
  margin-bottom: 12px;
`;
export const TotalPrice = styled.span``;
export const MinusBox = styled.div`
  width: calc(100% / 6);

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 40px;
  }
`;
export const MinusImage = styled.div`
  width: 34px;
  height: 34px;
  margin: 0 auto;
  border-radius: 50%;
  background: #fff url("/images/icon-minus-line.svg") no-repeat center center /
    15px 15px;
`;
export const DiscountPriceWrapper = styled.div`
  width: calc(100% / 6);
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: calc((100% - 20px) / 4);
  }
`;
export const DiscountPriceText = styled.p`
  margin-bottom: 12px;
`;
export const DiscountPrice = styled.span``;
export const PlusBox = styled.div`
  width: calc(100% / 6);

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 40px;
  }
`;
export const PlusImage = styled.div`
  width: 34px;
  height: 34px;
  margin: 0 auto;
  border-radius: 50%;
  background: #fff url("/images/icon-plus-line.svg") no-repeat center center /
    15px 15px;
`;
export const DeliveryPriceWrapper = styled.div`
  width: calc(100% / 6);
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: calc((100% - 20px) / 4);
  }
`;
export const DeliveryPriceText = styled.p`
  margin-bottom: 12px;
`;
export const DeliveryPrice = styled.span``;
export const PaymentWrapper = styled.div`
  width: calc(100% / 6);
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: calc((100% - 20px) / 4);
  }
`;
export const PaymentText = styled.p`
  margin-bottom: 12px;
`;
export const PaymentPrice = styled.strong`
  font-size: 36px;
  color: #eb5757;
`;
