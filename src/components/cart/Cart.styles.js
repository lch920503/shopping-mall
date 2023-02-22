import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 120px 50px;

  @media screen and (max-width: 768px) {
    padding: 120px 30px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
export const TabMenu = styled.div`
  height: 60px;
  border-radius: 10px;
  background: #f2f2f2;
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  align-items: center;
`;
export const TabMenuInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #60bba7;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
`;
export const TabMenuText = styled.span`
  disply: block;
  width: 26.6667%;
  text-align: center;
`;
export const TabMenuAll = styled.p`
  display: none;
  background: #f2f2f2;
  font-size: 18px;
  color: #767676;
`;
export const CartProductContainer = styled.section`
  position: relative;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin: 0 auto;
  margin-top: 35px;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;
export const InputWrapper = styled.div`
  width: 20%;
  text-align: center;
`;
export const CartProductInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #60bba7;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;

  &:checked {
    background: #60bba7;
    border: none;
  }
`;
export const CartProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26.6667%;
  text-align: center;
`;
export const CartProductImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 10px;
`;
export const CartProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const CartProductInfoWrapper = styled.div`
  width: 150px;
  margin-left: 36px;
`;
export const CartProductInfoSeller = styled.p`
  font-size: 12px;
  color: #767676;
  margin-bottom: 10px;
`;
export const CartProductInfoProduct = styled.p`
  font-size: 15px;
  color: #000;
  margin-bottom: 10px;
`;
export const CartProductInfoPrice = styled.p`
  font-size: 15px;
  color: #000;
  margin-bottom: 25px;
`;
export const CartProductInfoDelivery = styled.p`
  font-size: 14px;
  color: #767676;
`;
export const CartProductCountWrapper = styled.div`
  width: 26.6667%;
`;
export const CartProductCountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 45px;
  margin: 0 auto;
  padding: 0 12px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
export const MinusButton = styled.button`
  width: 10px;
  height: 18px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const CountNum = styled.span`
  width: 50%;
  text-align: center;
`;
export const PlusButton = styled.button`
  width: 10px;
  height: 18px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const CartProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 26.6667%;
`;
export const TotalPrice = styled.p`
  font-size: 18px;
  color: #eb5757;
`;
export const SubmitButton = styled.button`
  width: 130px;
  height: 40px;
  background: #60bba7;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;
export const ProductRemoveWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 20px;
  height: 15px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const TotalContainer = styled.div`
  max-width: 1280px;
  height: 150px;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;

  & > p,
  div,
  img {
    background: #f2f2f2;
  }
`;
