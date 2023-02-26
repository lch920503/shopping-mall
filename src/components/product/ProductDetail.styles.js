import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 150px 50px 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 150px 30px 90px;
  }
`;
export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px - 355px);

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const ProductImageWrapper = styled.div`
  flex-shrink: 0;
  width: 355px;
  height: auto;
  max-height: 359px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 450px;
    max-height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 355px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProductSellerStore = styled.p`
  font-size: 18px;
  color: #767676;
  margin-bottom: 16px;

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
export const ProductName = styled.p`
  font-size: 36px;
  color: #000;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 360px) {
    font-size: 20px;
  }
`;
export const ProductPrice = styled.span`
  font-size: 36px;
  color: #000;
  margin-bottom: 120px;

  @media screen and (max-width: 360px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;
export const ProductUnit = styled.span`
  font-size: 18px;
  color: #000;
`;
export const DeliveryWrapper = styled.div`
  width: 150px;
  height: 20px;
  margin-bottom: 20px;
`;
export const DeliveryInfo = styled.p`
  font-size: 16px;
  color: #767676;
`;
export const Line = styled.div`
  height: 2px;
  background: #c4c4c4;
  margin-bottom: 30px;
`;
export const AmountWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 30px;
`;
export const CountButton = styled.button``;
export const Minus = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const Count = styled.div`
  position: absolute;
  width: 56px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #c4c4c4;
  border-top: none;
  border-bottom: none;
`;
export const CountNum = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Plus = styled.img`
  position: absolute;
  width: 20px;
  height: 40px;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const SumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 360px) {
    display: block;
  }
`;
export const SumWrapper = styled.div``;
export const SumPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const TotalInfoContainer = styled.div``;
export const TotalInfoWrapper = styled.span`
  font-size: 18px;
  color: #767676;
`;
export const TotalCount = styled.span`
font-size: 18px;
color: #60bba7;

 &::after {
  content: "|";
  width: 5px;
  height: 23px;
  color: #c4c4c4;
  padding: 0px 11px;
`;
export const TotalPrice = styled.span`
  font-size: 36px;
  color: #60bba7;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const TotalPriceUnit = styled.span`
  font-size: 18px;
  color: #60bba7;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    @media screen and (max-width: 768px) {
      height: 45px;
    }
  }
`;
export const BuyButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #60bba7;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-right: 44px;

  @media screen and (max-width: 768px) {
    margin-right: 32px;
  }

  @media screen and (max-width: 360px) {
    margin-right: 24px;
    font-size: 14px;
  }
`;
export const CartButton = styled.button`
  width: 200px;
  height: 100%;
  border-radius: 5px;
  background: #767676;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
